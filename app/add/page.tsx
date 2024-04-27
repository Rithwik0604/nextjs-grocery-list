"use server";

import { Icons } from "@/lib/Icons";
import {
    Input,
    Autocomplete,
    AutocompleteItem,
    Button,
} from "@nextui-org/react";
import { prisma } from "@/db";
import "@/app/icons.css";
import { GetUser, AddItem } from "@/lib/data";
import { redirect } from "next/navigation";
import Link from "next/link";
import AutoC from "@/components/AutoC";
import { getServerSession } from "next-auth";
import { capitalizeFirstLetter } from "@/lib/title";

async function addItem(data: FormData) {
    "use server";

    const item: string = data.get("item")?.valueOf().toString()!;
    const quantity = data.get("quantity")?.valueOf().toString()!;
    const replacement = data.get("replacement")?.valueOf().toString()!;
    const category = data.get("category")?.valueOf().toString()!;

    if (item === "" || quantity === "" || category === "") {
        alert("Please fill out all the fields.");
    }

    const listItem: ListItem = {
        name: item,
        quantity: quantity,
        replacement: replacement === "" ? "-" : replacement,
        category: category.trim().toLowerCase(),
    };

    await AddItem(listItem);
    redirect("/");
}

export default async function Add() {
    const session = await getServerSession();

    if (!session) {
        redirect("/");
    }

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

    return (
        <div className="p-8 flex flex-col items-center gap-20 ">
            <h1 className="text-2xl">Add Item</h1>

            <form action={addItem} className="flex flex-col gap-4">
                <Input
                    isRequired
                    type="text"
                    name="item"
                    placeholder="Item"
                    startContent={Icons.item}
                />
                <Input
                    type="text"
                    isRequired
                    name="quantity"
                    placeholder="Quantity"
                    startContent={Icons.quantity}
                />
                <Input
                    type="text"
                    name="replacement"
                    placeholder="Replacement"
                    startContent={Icons.replacement}
                />

                <AutoC name="category" data={categoriesSet} label="Category" />

                <div className=" w-full flex flex-row justify-between">
                    <Button href="/" as={Link}>
                        Go Back
                    </Button>
                    <Button type="submit">Add</Button>
                </div>
            </form>
        </div>
    );
}
