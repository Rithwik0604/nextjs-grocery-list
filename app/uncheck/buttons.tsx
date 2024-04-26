"use client";

import { Button } from "@nextui-org/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
    uncheckAll: () => void;
}

export default function Buttons(props: Props) {
    const router = useRouter();

    const clicked = () => {
        props.uncheckAll();
        router.push("/");
    };

    return <Button onClick={() => clicked()}> Yes! </Button>;
}
