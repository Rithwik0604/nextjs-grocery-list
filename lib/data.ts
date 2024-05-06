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

export async function GetEditData(id: number) {
    "use server";

    return await prisma.listItem.findFirst({
        where: {
            id: id
        }
    })
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
            userId: userID?.id!
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


export async function ResetList() {
    "use server";
    const user = await GetUser();

    await prisma.listItem.deleteMany({
        where: {
            userId: user?.id
        }
    })
}


export async function addConnection(email: string, edit: boolean) {

    "use server";

    const user = await GetUser();

    // if user is the same
    if (user?.email === email) {
        return 3;
    }

    // if second user exists
    const secondUser = await prisma.user.findFirst({
        where: {
            email: email
        }
    });
    if (secondUser === null) {
        return 1;
    }



    // check if connection exists
    const secondUserID = await prisma.user.findFirst({
        where: {
            email: email
        },
    });


    const existingConnection = await prisma.userConnection.findFirst({
        where: {
            user1Email: user?.email,
            user2Email: secondUserID?.email
        }
    })
    if (existingConnection !== null) {
        return 2;
    }


    // otherwise make connection

    await prisma.userConnection.create({
        data: {
            user1Email: user?.email,
            user2Email: secondUserID?.email,
            canEdit: edit
        }
    })

    return 0;

}


export async function getConnections() {
    "use server"
    const user = await GetUser();



    return await prisma.userConnection.findMany({

        where: {
            user1Email: user?.email
        },
        include: {
            User2: {
                select: {
                    firstName: true,
                    secondName: true
                }
            }
        }
    });


}

export async function changeEdit(id: number, canEdit: boolean) {
    "use server";

    // const user = await GetUser();

    await prisma.userConnection.update({
        where: {
            id: id
        },
        data: {
            canEdit: canEdit
        }
    }
    )

}

export async function removeConnection(id: number) {
    "use server";

    await prisma.userConnection.delete({
        where: {
            id: id
        }
    })
}