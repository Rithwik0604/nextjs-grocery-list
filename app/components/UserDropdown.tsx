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
import {Icons} from './Icons'

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
                <DropdownItem
                    startContent="Theme"
                    endContent={
                        <span className="material-symbols-outlined">
                            {theme === "dark" ? "dark_mode" : "light_mode"}
                        </span>
                    }
                    onClick={() => switchTheme()}
                > </DropdownItem>
                <DropdownItem
                startContent="Switch User"
                endContent= {Icons.switch_user}
                >
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
