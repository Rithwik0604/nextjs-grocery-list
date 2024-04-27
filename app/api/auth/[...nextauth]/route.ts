import NextAuth from "next-auth/next";
import { options } from "./options";
import { handlers,signIn,signOut,auth } from "@/auth";



const handler = NextAuth(options);
export { handler as GET, handler as POST }

// import { handlers } from "@/auth";
// export const { GET, POST } = handlers;