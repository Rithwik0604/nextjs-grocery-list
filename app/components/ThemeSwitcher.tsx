"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button as NextButton } from "@nextui-org/react";
import "../icons.css";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div>
            <NextButton
                className= "fixed right-4 top-4"
                isIconOnly
                size="lg"
                variant="light"
                radius="full"
                onClick={() => switchTheme()}
            >
                <span className="material-symbols-outlined">
                    {theme === "dark" ? "dark_mode" : "light_mode"}
                </span>
            </NextButton>
        </div>
    );
}
