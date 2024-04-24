"use client";

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
    cn,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import "../icons.css";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Icons } from "./Icons";

export default function UserDropDown() {
    const { theme, setTheme } = useTheme();

    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="bordered">
                    <span className="material-symbols-outlined">person</span>
                </Button>
            </DropdownTrigger>
            <DropdownMenu variant="light" aria-label="Dropdown menu with icons">
                {/* Login */}
                <DropdownItem
                    startContent="Login"
                    endContent={Icons.switch_user}
                    textValue="login"
                ></DropdownItem>

                {/* Theme */}
                <DropdownItem
                    textValue="theme"
                    startContent="Theme"
                    endContent={
                        <span className="material-symbols-outlined">
                            {theme === "dark" ? "dark_mode" : "light_mode"}
                        </span>
                    }
                    onClick={() => switchTheme()}
                >
                    {" "}
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}