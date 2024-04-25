"use server";

import { Icons } from "@/lib/Icons";
import {
    Input,
    Autocomplete,
    AutocompleteItem,
    Button,
    Link,
} from "@nextui-org/react";
import { prisma } from "@/db";
import "@/app/icons.css";
import { GetUser, AddItem } from "@/lib/data";
import { redirect } from "next/navigation";
import MyAC from "./autoComplete";

async function addItem(data: FormData, user: any) {
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
        category: category,
    };

    await AddItem(listItem);
    redirect("/");
}

export default async function Add() {
    let user = await GetUser();

    const categories_: [] = await prisma.listItem.findMany({
        where: {
            user: user!,
        },
        select: {
            category: true,
        },
    });

    let categories = [];

    categories_.map((c) => {
        categories.push(c.category);
    });

    const auto = categories.map((c) => (
        <AutocompleteItem key={c}>{c}</AutocompleteItem>
    ));

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
                <Autocomplete
                    defaultItems={categories}
                    allowsCustomValue
                    startContent={Icons.category}
                    name="category"
                    label="Category"
                    isRequired
                >
                    {/* <AutocompleteItem
                        key={"animal.value"}
                        value={"animal.value"}
                    >
                        {"animal.label"}
                    </AutocompleteItem> */}
                </Autocomplete>

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
