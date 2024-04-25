"use client";

import React from "react";
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
import { prisma } from "@/db";

interface Props {
    items: ListItem[];
    funcs: ItemFunctions;
}

export default function Item({ items, funcs }: Props) {
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

    let rows: any = [];

    const getGot = (got: boolean, id: number) => {
        return (
            <Checkbox
                // onChange={(e) => funcs.changeGot(id, e.target.checked)}
                onChange={ () => funcs.changeGot(id, got)}
                defaultSelected={got}
            />
        );
    };

    items.map((i: ListItem) => {
        rows.push({
            key: i.id,
            item: i.name,
            quantity: i.quantity,
            replacement: i.replacement,
            got: getGot(i.got, i.id),
            edit: <Link href={"/edit" + i.id}> {Icons.edit} </Link>,
            delete: (
                <Button variant="light" isIconOnly>
                    {Icons.delete}
                </Button>
            ),
        });
    });

    return (
        <Table className="m-0" aria-label="Example table with dynamic content">
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
    );
}
