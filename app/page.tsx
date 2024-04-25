import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import NavBar from "../components/NavBar";
import Category from "../components/category";
import { prisma } from "@/db";
// import { changeGot } from "./api/handleGot";
import "./icons.css";
import { ChangeGot, AddItem, EditItem, RemoveItem } from "@/lib/data";
import AllButtons from "@/components/AllButtons";

let user, userList: any;

const funcs: ItemFunctions = {
    changeGot: ChangeGot,
    editItem: EditItem,
    addItem: AddItem,
    removeItem: RemoveItem,
};

export default async function Home() {
    const session = await getServerSession();

    if (session) {
        user = await prisma.user.findFirst({
            where: {
                email: session?.user?.email!,
            },
        });

        userList = await prisma.listItem.findMany({
            where: {
                user: user!,
            },
        });
    }

    return (
        <main>
            <NavBar />
            <Category list={userList} passDown={funcs} />
            {session && <AllButtons />}
        </main>
    );
}
