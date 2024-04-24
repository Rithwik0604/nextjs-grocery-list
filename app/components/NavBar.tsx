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
    Link,
    Button,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import UserDropDown from "./UserDropdown";
import "../icons.css";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            maxWidth={"full"}
            className="bg-ctm"
            onMenuOpenChange={setIsMenuOpen}
            position="sticky"
            isBordered={true}
        >
            <NavbarContent>
                <NavbarBrand className="absolute">
                    <Link
                        className="text-foreground  hover:cursor-pointer "
                        size="lg"
                        href="/"
                    >
                        <p className="font-bold text-inherit">Grocery List</p>{" "}
                        &nbsp;
                        <span className="material-symbols-outlined">
                            grocery
                        </span>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="flex flex-row-reverse" >
                <UserDropDown />
            </NavbarContent>
        </Navbar>
    );
}
