import NextAuth from "next-auth";
import prisma from "./prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Twitter from "next-auth/providers/twitter";
import Discord from "next-auth/providers/discord";
import Reddit from "next-auth/providers/reddit";

console.log("Database URL:", process.env.DATABASE_URL);

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  debug: true,
  providers: [
    Twitter({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
    }),
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
    Reddit({
      clientId: process.env.REDDIT_CLIENT_ID!,
      clientSecret: process.env.REDDIT_CLIENT_SECRET!,
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("signIn callback:", { user, account, profile });

      if (account?.provider === 'twitter') {
        if (profile?.data?.username) {
          user.name = profile.data.username;
        }
        if (!user.name) {
          console.error("No Twitter handle found");
          return false;
        }
      } else if (account?.provider === 'discord') {
        if (profile?.username) {
          user.name = profile.username;
        }
        if (!user.name) {
          console.error("No Discord username found");
          return false;
        }
      } else if (account?.provider === 'reddit') {
        if (profile?.name) {
          user.name = profile.name;
        }
        if (!user.name) {
          console.error("No Reddit username found");
          return false;
        }
      }

      const existingUser = await prisma.user.findUnique({
        where: { id: user.name },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            name: user.name,
            email: user.email || `${user.name}@${account?.provider}.local`,
            image: user.image || profile?.avatar || profile?.profile_image_url || profile?.icon_img,
          },
        });
      }

      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("redirect callback:", { url, baseUrl });
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, user, token }: { session: Session & { user: { handle?: string } }, user: any, token: any }) {
      console.log("session callback:", { session, user, token });
      session.user.id = user.id;
      session.user.handle = user.name;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("jwt callback:", { token, user, account, profile, isNewUser });
      if (user) {
        token.id = user.id;
        token.handle = user.name;
      }
      return token;
    },
  },
});
