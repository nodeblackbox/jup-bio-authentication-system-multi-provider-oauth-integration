"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import TwitterButtons from "../components/AuthButtonsTwitter";
import DiscordButtons from "../components/AuthButtonsDiscord";
import RedditButtons from "../components/AuthButtonsReddit";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full animate-ping"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 font-bold">
            Loading
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {session ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome, {session.user?.name || "User"}!</h1>
          <p className="text-gray-700">You are signed in as {session.user?.email}</p>
          <button
            onClick={() => signOut()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome to the App</h1>
          <p className="text-gray-700">Please sign in to continue</p>
          <div className="space-y-2 mt-4">
            <TwitterButtons />
            <DiscordButtons />
            <RedditButtons />
          </div>
        </div>
      )}
    </div>
  );
}