import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import NavBar from "../components/NavBar";
import Category from "../components/category";
import { prisma } from "@/db";
// import { changeGot } from "./api/handleGot";
import "./icons.css";

async function ChangeGot(id: number, got: boolean) {
    "use server";
    await prisma.listItem.update({
        where: {
            id: id,
        },
        data: {
            got: got,
        },
    });
}

export default async function Home() {
    const session = await getServerSession();

    const user = await prisma.user.findFirst({
        where: {
            email: session?.user?.email!,
        },
    });
    const list: any = await prisma.listItem.findMany({
        where: {
            user: user!,
        },
    });

    const funcs : ItemFunctions = {
        changeGot : ChangeGot
    }

    return (
        <main>
            <NavBar />
            <Category list={list} passDown={funcs} />
        </main>
    );
}
