// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="light">
                <SessionProvider basePath="/newgrocerylist/api/auth" >{children}</SessionProvider>
            </NextThemesProvider>
        </NextUIProvider>
    );
}
