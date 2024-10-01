import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions={
  secret:process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "email", name: "email", type: "text", required: true, placeholder: "Enter your email" },
        password: { label: "password", name: "password", type: "password", required: true, placeholder: "Enter your password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          // console.log("credentials is required")
          return null;
        }

        if (credentials.email) {
          // Find the user based on the email
          const currentUser = users.find((user) => user.email === credentials.email);

          // Log the currentUser if found
          // console.log(credentials.email);

          if (currentUser) {
            // If user is found, return user
            // console.log(currentUser)
            return currentUser;
          }
        }

        // If no user is found, return null
        // console.log("not a valid user")
        return null;
      },
    }),
    
  ],
  callbacks: {
    async session({ session, user, token }) {
      // Propagate user type to the session object
      // console.log(session, token)
      session.user.type = token.type; // Use token type
      return session;
    },
    async jwt({ token, user }) {
      // Persist type from user to token on login
      // console.log(token, user)
      if (user) {
        token.type = user.type;
      }
      return token;
    },
  },
}
const handler = NextAuth(authOptions);

const users = [
  { id: 1,
    email: "ab@c.com",
    name: "james",
    type: "admin",
    image: "https://usatodayhss.com/wp-content/uploads/sites/96/2022/08/11268798.jpeg?w=1000&h=600&crop=1"
  },
  {
    id: 2,
    email: "ac@c.com",
    name: "james",
    type: "user"
  },
  {
    id: 3,
    email: "ac@c.com",
    name: "james",
    type: "user"
  },
];

export { handler as GET, handler as POST };
