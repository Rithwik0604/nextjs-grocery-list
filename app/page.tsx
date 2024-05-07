import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import NavBar from "../components/NavBar";
import Category from "../components/category";
import { prisma } from "@/db";
// import { changeGot } from "./api/handleGot";
import "./icons.css";
import { ChangeGot, AddItem, EditItem, RemoveItem } from "@/lib/data";
import AllButtons from "@/components/AllButtons";
import OtherLists from "@/components/OtherLists";

const funcs: ItemFunctions = {
    changeGot: ChangeGot,
    editItem: EditItem,
    addItem: AddItem,
    removeItem: RemoveItem,
};

export default async function Home() {
    let user,
        userList: any,
        otherUsers: any,
        otherList: any = [];

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

        otherUsers = await prisma.userConnection.findMany({
            where: {
                user2Email: user?.email,
            },
            include: {
                User1: {
                    select: {
                        id: true,
                        firstName: true,
                        secondName: true,
                    },
                },
            },
        });

        const userIds = await otherUsers.map((user: any) => ({
            id: user.User1.id,
            firstName: user.User1.firstName,
            secondName: user.User1.secondName,
            canEdit : user.canEdit,
        }));

        await userIds.forEach(async (user: any) => {
            let tempList = await prisma.listItem.findMany({
                where: {
                    userId: user.id,
                },
            });
            otherList.push({ ...user, list: tempList });
        });

        console.log(otherList);
    }

    return (
        <main>
            <NavBar />
            <Category list={userList} passDown={funcs} open={true} canEdit={true}/>
            {session && <AllButtons />}
            {session && otherUsers.length > 0 && (
                <OtherLists list={otherList} passDown={funcs} />
            )}
        </main>
    );
}
