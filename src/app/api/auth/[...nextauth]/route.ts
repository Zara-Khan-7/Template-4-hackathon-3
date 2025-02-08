import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "admin@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.email === "admin@example.com" && credentials?.password === "securepassword") {
          return { id: "1", name: "Admin", email: credentials.email };
        }
        return null; // Authentication failed
      },
    }),
  ],
  pages: {
    signIn: "/adminlogin", // Redirect to admin login page on failure
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
