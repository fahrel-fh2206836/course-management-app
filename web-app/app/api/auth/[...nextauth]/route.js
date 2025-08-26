import NextAuth from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import appRepo from "@/app/repo/app-repo";

export const  authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;
        const user = await appRepo.getUser(credentials.username, credentials.password);
        if (user && !user.error) {
          const { password, ...safeUser } = user;
          return { id: user.userId?.toString() ?? user.id?.toString(), ...safeUser };
        }
        return null;
      },
    }),
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
    async signIn({ account, profile, user }) {
      if (account?.provider === 'credentials') {
        if (!user) return false;
        account.userData = user;
        return true;
      }
      // OAuth providers: map by email to existing user record
      if (!profile?.email) return false;
      const dbUser = await appRepo.getUserByEmail(profile.email);
      if (!dbUser || dbUser.error) return false;
      const { password, ...safeUser } = dbUser;
      account.userData = { id: dbUser.userId?.toString() ?? dbUser.id?.toString(), ...safeUser };
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

