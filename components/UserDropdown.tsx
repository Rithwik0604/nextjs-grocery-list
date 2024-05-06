"use client";

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
    // cn,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Icons } from "../lib/Icons";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

export default function UserDropDown() {
    // debugger;
    const { theme, setTheme } = useTheme();

    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const router = useRouter();
    const { data: session } = useSession();

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="bordered">
                    {!session && <span>Sign in {"->"}</span>}
                    {session && (
                        <span> {session.user?.name?.split(" ")[0]} </span>
                    )}
                    {Icons.person}
                </Button>
            </DropdownTrigger>
            <DropdownMenu variant="light" aria-label="Dropdown menu with icons">
                {session ? (
                    <DropdownItem
                        startContent="Logout"
                        endContent={Icons.logout}
                        textValue="logout"
                        onClick={() => signOut()}
                    ></DropdownItem>
                ) : (
                    <DropdownItem
                        startContent="Login"
                        endContent={Icons.login}
                        textValue="login"
                        onClick={() => signIn()}
                    ></DropdownItem>
                )}

                {session! && (
                    <DropdownItem
                        textValue="connection"
                        startContent="Share List"
                        endContent={Icons.connection}
                        onClick={() => router.push("/share")}
                    ></DropdownItem>
                )}

                {/* {session ? (
                    <DropdownItem
                        textValue="connection"
                        startContent="Share List"
                        endContent={Icons.connection}
                        onClick={() => router.push("/share")}
                    ></DropdownItem>
                ) : (
                    <span>Login to</span>
                )} */}

                {/* Theme */}
                <DropdownItem
                    textValue="theme"
                    startContent="Theme"
                    endContent={
                        // <span className="material-symbols-outlined">
                        //     {theme === "dark" ? "dark_mode" : "light_mode"}
                        // </span>
                        theme === "dark" ? Icons.dark_mode : Icons.light_mode
                    }
                    onClick={() => switchTheme()}
                ></DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
