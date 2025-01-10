# 🔐 Multi-Provider OAuth Integration Hub

<div align="center">

![Discord](https://img.shields.io/badge/Discord-OAuth-7289DA?style=for-the-badge&logo=discord&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-OAuth-181717?style=for-the-badge&logo=github&logoColor=white)
![Twitter](https://img.shields.io/badge/Twitter-OAuth-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)
![Reddit](https://img.shields.io/badge/Reddit-OAuth-FF4500?style=for-the-badge&logo=reddit&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js%2014-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

A comprehensive authentication system showcasing seamless integration with multiple OAuth providers
</div>

## ✨ Overview

This project demonstrates a production-ready authentication implementation supporting multiple OAuth providers (Discord, GitHub, Twitter, Reddit), built with cutting-edge technologies and best practices. Perfect for developers looking to implement secure, scalable multi-provider authentication.

## 🚀 Key Features

- **⚡ Modern Stack**
  - Next.js 14 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Prisma ORM for database management
  - Supabase integration

- **🔒 Multi-Provider Authentication**
  - Discord OAuth 2.0
  - GitHub OAuth
  - Twitter (X) OAuth
  - Reddit OAuth
  - More providers coming soon!

- **💎 Best Practices**
  - Type-safe development
  - Responsive design
  - Clean architecture
  - Performance optimized
  - Secure session management

## 🛠️ Quick Start

### Prerequisites
```bash
Node.js 18+
npm or yarn
Developer accounts for OAuth providers
PostgreSQL database
```

### OAuth Provider Setup

Before starting, you'll need to set up developer applications for each OAuth provider:

#### Discord Setup
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Navigate to OAuth2 settings
4. Add redirect URL: `http://localhost:3000/api/auth/callback/discord`
5. Copy Client ID and Client Secret

#### GitHub Setup
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Add homepage URL: `http://localhost:3000`
4. Add callback URL: `http://localhost:3000/api/auth/callback/github`
5. Copy Client ID and Client Secret

#### Twitter Setup
1. Visit [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Create a new Project & App
3. Enable OAuth 2.0
4. Add callback URL: `http://localhost:3000/api/auth/callback/twitter`
5. Copy API Key and API Secret

#### Reddit Setup
1. Go to [Reddit Apps](https://www.reddit.com/prefs/apps)
2. Create a new application
3. Select 'web app'
4. Add redirect URL: `http://localhost:3000/api/auth/callback/reddit`
5. Copy Client ID and Client Secret

### Environment Configuration

Create `.env.local` with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL="https://your-project-url.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_JWT_SECRET="your-supabase-jwt-secret"

# Node Environment
NODE_ENV="development"

# Twitter (X) OAuth Configuration
TWITTER_CLIENT_ID="your-twitter-client-id"
TWITTER_CLIENT_SECRET="your-twitter-client-secret"

# Database Configuration
DATABASE_URL="postgresql://username:password@host:port/database?pgbouncer=true"
DIRECT_URL="postgresql://username:password@host:port/database"

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"
AUTH_SECRET="generate-a-secure-random-string"

# Reddit OAuth Configuration
REDDIT_CLIENT_ID="your-reddit-client-id"
REDDIT_CLIENT_SECRET="your-reddit-client-secret"
REDDIT_REDIRECT_URI="http://localhost:3000/api/auth/callback/reddit"

# Discord OAuth Configuration
DISCORD_CLIENT_ID="your-discord-client-id"
DISCORD_CLIENT_SECRET="your-discord-client-secret"

# GitHub OAuth Configuration
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

### Installation Steps

1. **Clone & Install**
   ```bash
   git clone <your-repo-url>
   cd <project-directory>
   npm install
   ```

2. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000` 🎉

## 🏗️ Architecture

```
├── app/          # Next.js app directory
├── components/   # React components
│   ├── auth/    # Authentication components
│   └── ui/      # UI components
├── prisma/      # Database schema
├── public/      # Static assets
└── docs/        # Documentation
```

## 🔐 Authentication Flow

1. 👤 User selects preferred OAuth provider
2. 🔄 Redirect to provider's authorization page
3. ✅ User grants permissions
4. 🎯 Provider callback processing
5. 💾 User data storage & session creation


## 🤝 Contributing

We love contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📝 License

MIT License - See [LICENSE](LICENSE) for details.

---

<div align="center">

Made with ❤️ by Your Team Name

[Documentation](./docs) | [Report Bug](./issues) | [Request Feature](./issues)

</div>
