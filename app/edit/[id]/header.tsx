"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header(flag: boolean) {
    const router = useRouter();

    if (flag) {
        alert("Wrong Page");
        router.push("/");
    }

}
