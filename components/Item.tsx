"use client";

import React, { useEffect, useState } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
    Button,
    Checkbox,
} from "@nextui-org/react";
import { Icons } from "@/lib/Icons";
import Link from "next/link";
import "../app/globals.css";
import "../app/icons.css";
import { useRouter } from "next/navigation";

interface Props {
    items: ListItem[];
    funcs: ItemFunctions;
}

export default function Item({ items, funcs }: Props) {
    console.info("RENDERED ITEMS");

    const columns: any = [
        {
            key: "item",
            label: "Item",
        },
        {
            key: "quantity",
            label: "Quantity",
        },

        {
            key: "replacement",
            label: "Replacement",
        },
        {
            key: "got",
            label: "Got",
        },
        {
            key: "edit",
            label: "",
        },
        {
            key: "delete",
            label: "",
        },
    ];

    const router = useRouter();
    const [rows, setRows] = useState([]);

    const getGot = (got: boolean, id: number) => {
        return (
            <Checkbox
                onChange={(e: any) => funcs.changeGot(id, e.target.checked)}
                defaultSelected={got}
            />
        );
    };

    let temp: any = [];
    const remove = (i: ListItem) => {
        temp = rows;
        temp.splice(temp.indexOf(i));
        items.splice(items.indexOf(i));
        funcs.removeItem(i.id!);

        if (temp.length === 0) {
            router.refresh();
        }

        setRows(temp);
    };

    useEffect(() => {
        setRows(temp);
    }, []);

    items.map((i: ListItem) => {
        temp.push({
            key: i.id,
            item: i.name,
            quantity: i.quantity,
            replacement: i.replacement,
            got: getGot(i.got!, i.id!),
            // TODO: complete the edit page
            edit: <Link href={"/edit/" + i.id}> {Icons.edit} </Link>,
            delete: (
                <Button onClick={() => remove(i)} variant="light" isIconOnly>
                    <span className="material-symbols-outlined text-red-500">
                        remove
                    </span>
                </Button>
            ),
        });
    });
    return (
        rows.length > 0 && (
            <Table className="" aria-label="Example table with dynamic content">
                <TableHeader columns={columns}>
                    {(column: any) => (
                        <TableColumn className="text-center" key={column.key}>
                            {column.label}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={rows}>
                    {(item: any) => (
                        <TableRow key={item.key}>
                            {(columnKey) => (
                                <TableCell className="text-center">
                                    {getKeyValue(item, columnKey)}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        )
    );
}
