"use client";

import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button, Spinner } from "@nextui-org/react";
import Image from "next/image";
import googleImage from "@/public/google.png";
import { useState } from "react";
import Google from "next-auth/providers/google";

export default function SignInPage() {
    const { data: session } = useSession();

    const [loading, setLoading] = useState(false);

    if (session) {
        redirect("/");
    }

    const g = Google({
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
    });

    return (
        <div className="   w-screen h-screen flex flex-col justify-center items-center ">
            <div
                className=" flex flex-col gap-10 items-center bg-ctm text-background px-10 py-6 rounded-lg "
                key={g.name}
            >
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <Button
                            className="text-2xl"
                            onClick={() => {
                                setLoading(true);
                                signIn(g.id);
                            }}
                        >
                            Sign in with {g.name}
                            <Image
                                width={20}
                                src={googleImage}
                                alt="Google Image"
                            />
                        </Button>
                        <Button className="text-2xl w-fit " as={Link} href="/">
                            Go Back
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}
