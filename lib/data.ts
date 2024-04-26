import { prisma } from "@/db";
import { getServerSession } from "next-auth/next";




export async function GetUser() {
    const session = await getServerSession();
    let user;

    if (session) {
        user = await prisma.user.findFirst({
            where: {
                email: session?.user?.email!,
            },
        });
    }

    return user;
}



export async function ChangeGot(id: number, got: boolean) {
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

export async function RemoveItem(id: number) {
    "use server";
    await prisma.listItem.delete({
        where: {
            id: id
        }
    });
}


export async function EditItem(item: ListItem) {

    "use server";
    await prisma.listItem.update({
        where: {
            id: item.id,
        },
        data: {
            name: item.name,
            quantity: item.quantity,
            replacement: item.replacement,
            category: item.category
        }
    })

}

export async function AddItem(item: ListItem) {

    "use server";

    const userID = await GetUser();

    await prisma.listItem.create({
        data: {
            name: item.name,
            category: item.category,
            replacement: item.replacement,
            quantity: item.quantity,
            userId: userID?.id
        }
    })

}

export async function UncheckAll() {
    "use server";
    const user = await GetUser();
    await prisma.listItem.updateMany({
        where: {
            userId: user?.id!,
        },
        data: {
            got: false,
        }
    })

}