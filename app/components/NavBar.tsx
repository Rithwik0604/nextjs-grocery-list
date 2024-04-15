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

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar
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

            <NavbarContent className="flex justify-end items-center">
                <UserDropDown />
            </NavbarContent>
        </Navbar>
    );
}
