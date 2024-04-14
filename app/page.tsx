import Image from "next/image";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import NavBar from './components/NavBar'
import Category from './components/category'

export default function Home() {
    return (
        <main>
        <NavBar/>
        <Category/>
        </main>
    );
}
