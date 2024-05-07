"use client";

import { CheckBox } from "@/components/CheckBox";
import { Icons } from "@/lib/Icons";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface FormProps {
    handle: (data: FormData) => void;
}

export default function Form({ handle }: FormProps) {
    const [status, setStatus] = useState<number>(0);

    const router = useRouter();

    const action: any = async (data: FormData) => {
        const r: any = await handle(data);
        if (r === 0) {
            router.push("/share");
        }
        setStatus(r);
        setTimeout(() => {
            setStatus(0);
        }, 3000);
    };

    const getMessage = () => {
        if (status === 1) {
            return "Person does not exist";
        } else if (status === 2) {
            return "You have already shared with this person";
        } else if (status === 3) {
            return "You can't share with yourself";
        }
    };

    return (
        <>
            {status !== 0 && (
                <div className="fixed top-4 left-4 flex flex-col items-start bg-danger-100 w-max  md:w-2/12 p-2 rounded ">
                    <p> {getMessage()} </p>
                    <div className="w-full flex flex-row-reverse ">
                        <Button
                            isIconOnly
                            startContent={Icons.close}
                            className="bg-transparent"
                            onClick={() => setStatus(0)}
                        ></Button>
                    </div>
                </div>
            )}

            <form
                className="p-4 rounded flex flex-col gap-8 items-center "
                action={action}
            >
                <Input
                    className="select-none"
                    type="email"
                    name="email"
                    label="Recipient's Email"
                    isRequired
                    endContent={Icons.email}
                />

                <CheckBox
                    defaultChecked={false}
                    name="edit"
                    label="Can Edit?"
                />

                <div className="mt-8 w-full flex justify-between">
                    <Button as={Link} href="/share">
                        Go Back
                    </Button>
                    <Button type="submit"> Share </Button>
                </div>
            </form>
        </>
    );
}
