import { prisma } from "@/db";

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

export async function AddItem(user: any, item: ListItem) {

    "use server";
    await prisma.listItem.create({
        data: {
            name: item.name,
            category: item.category,
            replacement: item.replacement,
            quantity: item.quantity,
            user : user
        }
    })

}