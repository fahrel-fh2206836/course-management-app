import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import prisma from './prisma';

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.username || !credentials.password) {
          return null;
        }

        const dbUser = await prisma.user.findFirst({
          where: { username: credentials.username },
        });

        if (dbUser && dbUser.password === credentials.password) {
          const { password, ...userWithoutPassword } = dbUser;
          return userWithoutPassword; // includes user.role
        }

        return null;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Persist user.role into token (for credentials)
      if (user) {
        token.role = user.role || "Student"; // default fallback
      }

      // Optional: assign default role for Google users (if using OAuth)
      if (account?.provider === "google" && profile?.email) {
        const dbUser = await prisma.user.findFirst({
          where: { email: profile.email },
        });

        token.role = dbUser?.role || "Student"; // fallback if new user
      }

      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },

    async redirect({ baseUrl, url, token }) {
      if (!token?.role) return baseUrl;

      switch (token.role) {
        case "Student":
          return `${baseUrl}/dashboard/student`;
        case "Instructor":
          return `${baseUrl}/dashboard/instructor`;
        case "Admin":
          return `${baseUrl}/dashboard/admin`;
        default:
          return baseUrl;
      }
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
