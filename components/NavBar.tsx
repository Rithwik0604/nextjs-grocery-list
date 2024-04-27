"use client";

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,
    Link,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import UserDropDown from "./UserDropdown";
import { Icons } from "@/lib/Icons";
import NextLink from "next/link";

export default function NavBar() {
    console.info("RENDERING NAVBAR");

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            maxWidth={"full"}
            className="bg-ctm  select-none "
            onMenuOpenChange={setIsMenuOpen}
            position="sticky"
            isBordered={true}
        >
            <NavbarContent>
                <NavbarBrand className="absolute">
                    <Link
                        as={NextLink}
                        className="text-foreground  hover:cursor-pointer "
                        size="lg"
                        href="/"
                    >
                        <p className="font-bold text-inherit">Grocery List</p>{" "}
                        &nbsp;
                        {Icons.grocery}
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="flex flex-row-reverse">
                <UserDropDown />
            </NavbarContent>
        </Navbar>
    );
}
