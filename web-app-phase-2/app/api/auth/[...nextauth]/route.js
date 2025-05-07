// export const runtime = "nodejs";

// import { authConfig } from "@/lib/auth";
// import NextAuth from "next-auth/next";

// const handler = NextAuth(authConfig);

// export {handler as GET, handler as POST}

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getUserByEmailAction } from "@/app/actions/server-actions";

export const  authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks : {
    async signIn({ account,profile }) {
      const user = await getUserByEmailAction(profile.email);
      if (!user) return false;
      account.role = user.role;
      account.userId = user.userId;
      return true;
    },
    async jwt({ token, account }) {
      if (account?.role) {
        token.role = account.role;
        token.userId = account.userId;
      }
      return token;
    },
    async session({ session, token }) {
      // Carry over the role and userId to session
      session.user.role = token.role;
      session.user.userId = token.userId;
      return session;
    }
  },
  secret : process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}

