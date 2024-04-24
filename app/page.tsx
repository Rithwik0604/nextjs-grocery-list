// "use client";
import Image from "next/image";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import NavBar from "./components/NavBar";
import Category from "./components/category";
import { useEffect, useState } from "react";
import { getData } from "./api/getData";

export default function Home() {
    getData();
    return (
        <main>
            <NavBar />
            <Category />
        </main>
    );
}
