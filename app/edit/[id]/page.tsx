import { Icons } from "@/lib/Icons";
import { Autocomplete, Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { GetEditData, EditItem, GetUser } from "@/lib/data";
import { redirect } from "next/navigation";
import Header from "./header";
import { getServerSession } from "next-auth";
import { prisma } from "@/db";
import { capitalizeFirstLetter } from "@/lib/title";
import AutoC from "@/components/AutoC";

type Params = {
    params: { id: string };
    searchParams: any;
};

let id: number;

async function Handle(data: FormData) {
    "use server";

    const item: string = data.get("item")?.valueOf().toString()!;
    const quantity = data.get("quantity")?.valueOf().toString()!;
    const replacement = data.get("replacement")?.valueOf().toString()!;
    const category = data.get("category")?.valueOf().toString()!;

    if (item === "" || quantity === "" || category === "") {
        alert("Please fill out all the fields.");
    }

    const listItem: ListItem = {
        id: id,
        name: item,
        quantity: quantity,
        replacement: replacement === "" ? "-" : replacement,
        category: category.trim().toLowerCase(),
    };

    await EditItem(listItem);
    redirect("/");
}

async function GetCategories() {
    let user = await GetUser();
    const categories_: any[] = await prisma.listItem.findMany({
        where: {
            user: user!,
        },
        select: {
            category: true,
        },
    });
    // let categories: string[] = [];
    const categoriesSet: Set<string> = new Set();

    categories_.map((c) => {
        categoriesSet.add(capitalizeFirstLetter(c.category));
    });

    return categoriesSet;
}

export default async function Edit(params: Params) {
    const session = await getServerSession();

    if (!session) {
        redirect("/");
    }

    id = parseInt(params.params.id);

    if (isNaN(id)) {
        redirect("/");
    }

    const data = await GetEditData(id);

    if (data === null) {
        redirect("/");
    }

    const categories = await GetCategories();

    return (
        <div className="p-8 flex flex-col mt-20 items-center gap-20 ">
            <h1 className="text-2xl">Edit Item</h1>
            <form action={Handle} className="flex flex-col gap-4">
                <Input
                    isRequired
                    type="text"
                    name="item"
                    placeholder="Item"
                    startContent={Icons.item}
                    defaultValue={data.name}
                    contentEditable={true}
                />
                <Input
                    type="text"
                    isRequired
                    name="quantity"
                    placeholder="Quantity"
                    startContent={Icons.quantity}
                    defaultValue={data.quantity}
                />
                <Input
                    type="text"
                    name="replacement"
                    placeholder="Replacement"
                    startContent={Icons.replacement}
                    defaultValue={data.replacement!}
                />

                <AutoC
                    value={capitalizeFirstLetter(data.category)}
                    name="category"
                    data={categories}
                    label="Category"
                />

                {/* <Input
                    isRequired
                    type="text"
                    name="category"
                    placeholder="Category"
                    startContent={Icons.category}
                    defaultValue={data.category!}
                /> */}

                <div className=" w-full flex flex-row justify-between">
                    <Button href="/" as={Link}>
                        Go Back
                    </Button>
                    <Button type="submit">Confirm</Button>
                </div>
            </form>
        </div>
    );
}
