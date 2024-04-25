import GoogleProvider from "next-auth/providers/google";
import { prisma } from '@/db'
import { NextAuthOptions } from "next-auth";



export const options : any = {
    providers: [
        GoogleProvider({

            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        })
    ],

    callbacks: {
        async signIn({ profile }: { profile: Profile }) {

            const exist = await prisma.user.findFirst({
                where: {
                    email: profile.email
                }
            })

            if (!exist) {
                await prisma.user.create({
                    data: {
                        firstName: profile.given_name,
                        secondName: profile.family_name,
                        email: profile.email,
                        joinedAt: new Date(),
                        lastLogin: new Date()
                    }
                })
            }
            else {
                await prisma.user.update({
                    where: {
                        email: profile.email
                    },
                    data: {
                        lastLogin: new Date()
                    }
                })
            }
            return true
        },
    }
}