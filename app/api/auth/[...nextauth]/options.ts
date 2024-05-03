import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "@/app/(models)/User";
import { Document } from "mongoose";

interface UserDocument extends Document {
  email: string;
  password?: string;
  role?: string;
}

export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        let userRole = "noroleuser";
        if (profile?.email === "maxime.prevot1804kz@gmail.com") {
          userRole = "Prov";
        }
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
          image: profile.picture,
        };
      },
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_Secret as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials: any): Promise<any> {
        try {
          const foundUser = (await User.findOne({ email: credentials.email })
            .lean()
            .exec()) as UserDocument;

          if (foundUser) {
            const match = await bcrypt.compare(
              credentials.password ?? "",
              foundUser.password ?? ""
            );

            if (match) {
              delete foundUser.password;
              foundUser["role"] = "Cred";
              return foundUser;
            }
          }
        } catch (err) {
          console.log(err);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.role = user.role;
        token.id = user.id || user._id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session && token && token.role) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
  },
};
