import { Icons } from "@/lib/Icons";
import { Autocomplete, Button, Input} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { GetEditData, EditItem } from "@/lib/data";
import { redirect } from "next/navigation";
import Header from "./header";

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
        category: category,
    };

    await EditItem(listItem);
    redirect("/");
}

export default async function Edit(params: Params) {
    id = parseInt(params.params.id);

    if (isNaN(id)) {
        redirect("/");
    }

    const data = await GetEditData(id);

    if (data === null) {
        redirect("/");
    }

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
                <Input
                    isRequired
                    type="text"
                    name="category"
                    placeholder="Category"
                    startContent={Icons.category}
                    defaultValue={data.category!}
                />

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
