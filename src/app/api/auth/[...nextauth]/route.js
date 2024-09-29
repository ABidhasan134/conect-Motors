import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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
          console.log("credentials is required")
          return null;
        }

        if (credentials.email) {
          // Find the user based on the email
          const currentUser = users.find((user) => user.email === credentials.email);

          // Log the currentUser if found
          console.log(credentials.email);

          if (currentUser) {
            // If user is found, return user
            console.log(currentUser)
            return currentUser;
          }
        }

        // If no user is found, return null
        console.log("not a valid user")
        return null;
      },
    }),
  ],
});

const users = [
  {
    email: "ab@c.com",
  },
  {
    email: "ac@c.com",
  },
  {
    email: "bc@c.com",
  },
];

export { handler as GET, handler as POST };
