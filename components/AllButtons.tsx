"use client";

import { Button, Link } from "@nextui-org/react";
import { useSession } from "next-auth/react";

import React, { useEffect, useState } from "react";

export default function AllButtons() {
    const { data: session } = useSession();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (session) {
            setLoading(false);
        }
    }, [session]);

    return (
        !loading && (
            <footer className="w-full  flex flex-row  justify-evenly ">
                <Button>Uncheck All</Button>
                <Button>Reset List</Button>
                <Button href="/add" as={Link}>
                    Add Item
                </Button>
            </footer>
        )
    );
}
