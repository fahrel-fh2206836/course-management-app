import NextAuth from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
import { getUserByEmailAction } from "@/app/actions/server-actions";

export const  authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: { scope: 'read:user user:email' },
      },
    }),
  ],
  callbacks : {
    async signIn({ account,profile }) {
      console.log(profile)
      const user = await getUserByEmailAction(profile.email);
      if (!user) return false;
      const { password, ...safeUser } = user;
      account.userData = safeUser;
      return true;
    },
    async jwt({ token, account }) {
      if (account?.userData) {
        token.user = account.userData;
      }
      return token;
    },
    async session({ session, token }) {
      // Carry over the role and userId to session
      session.user = token.user
      return session;
    }
  },
  secret : process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}

