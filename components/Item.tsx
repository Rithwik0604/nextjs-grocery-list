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
    Tooltip,
} from "@nextui-org/react";
import { Icons } from "@/lib/Icons";
import Link from "next/link";
import "../app/globals.css";
import "../app/icons.css";
import { useRouter } from "next/navigation";
import { table } from "console";

interface Props {
    items: ListItem[];
    funcs: ItemFunctions;
}
type OverlayPlacement =
    | "top"
    | "bottom"
    | "right"
    | "left"
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "left-start"
    | "left-end"
    | "right-start"
    | "right-end";

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
            label: "Repl.",
        },
        {
            key: "got",
            label: "Actions",
        },
        // {
        //     key: "edit",
        //     label: "",
        // },
        // {
        //     key: "delete",
        //     label: "",
        // },
    ];

    let placement: OverlayPlacement = innerWidth > 768 ? "top" : "right";

    const router = useRouter();
    const [rows, setRows] = useState([]);

    const getGot = (got: boolean, id: number) => {
        return (
            <Tooltip placement={placement} closeDelay={0} content="Got">
                <span className="text-lg cursor-pointer active:opacity-50 ">
                    <input
                        type="checkbox"
                        defaultChecked={got}
                        name="got"
                        id="got"
                        className="p-40 accent-primary-500 w-4 h-4 rounded-full checked:bg-red-500 cursor-pointer"
                        onChange={(e: any) =>
                            funcs.changeGot(id, e.target.checked)
                        }
                    />

                    {/* <Checkbox
                        className="flex container w-min h-min items-center justify-center"
                        onChange={(e: any) =>
                            funcs.changeGot(id, e.target.checked)
                        }
                        defaultSelected={got}
                    ></Checkbox> */}
                </span>
            </Tooltip>
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

    // TODO: Change pc tooltip placement

    items.map((i: ListItem) => {
        temp.push({
            key: i.id,
            item: i.name,
            quantity: i.quantity,
            replacement: i.replacement,
            got: (
                <div className="relative flex flex-wrap flex-col md:flex-row md:gap-1 justify-center items-center gap-2">
                    {getGot(i.got!, i.id!)}
                    <Tooltip
                        placement={placement}
                        closeDelay={0}
                        content="Edit item"
                        color="default"
                    >
                        <span className="text-lg cursor-pointer active:opacity-50">
                            <Link href={"/edit/" + i.id}> {Icons.edit} </Link>{" "}
                        </span>
                    </Tooltip>

                    <Tooltip
                        placement={placement}
                        closeDelay={0}
                        content="Remove Item"
                    >
                        <span className="text-lg cursor-pointer active:opacity-50">
                            <button
                                className="m-0 p-0 h-min w-min "
                                onClick={() => remove(i)}
                                // variant="light"
                                // isIconOnly
                            >
                                <span className="material-symbols-outlined p-0 m-0 text-red-500">
                                    remove
                                </span>
                            </button>
                        </span>
                    </Tooltip>
                </div>
            ),
            // TODO: complete the edit page
            edit: (
                <div className="relative flex flex-wrap justify-center items-center gap-2">
                    <Tooltip closeDelay={0} content="Edit item" color="default">
                        <span className="text-lg cursor-pointer active:opacity-50">
                            <Link href={"/edit/" + i.id}> {Icons.edit} </Link>{" "}
                        </span>
                    </Tooltip>

                    <Tooltip closeDelay={0} content="Remove Item">
                        <span className="text-lg cursor-pointer active:opacity-50">
                            <Button
                                onClick={() => remove(i)}
                                variant="light"
                                isIconOnly
                            >
                                <span className="material-symbols-outlined text-red-500">
                                    remove
                                </span>
                            </Button>
                        </span>
                    </Tooltip>
                </div>
            ),
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
            // <table className="w-full text-center bg-blue-400 m-0 p-0 text-2xs ">
            //     {columns.map((column: any) => (
            //         <th className="font-normal" key={column.key}>
            //             {column.label}
            //         </th>
            //     ))}
            //     {/* {rows.slice(1).map((row: any) => (
            //         <tr key={row.key}>
            //             {Object.keys(row).map((key) => (
            //                 <td key={key}>{row[key]}</td>
            //             ))}
            //         </tr>
            //     ))} */}

            //     {rows.map((row: any) => (
            //         <tr key={row.key}>
            //             {Object.keys(row).map(
            //                 (key) => (

            //                     console.log(key),
            //                     (<td key={key}>{row[key]}</td>)
            //                 )
            //             )}
            //         </tr>
            //     ))}
            // </table>

            <Table
                removeWrapper
                fullWidth={false}
                // isCompact
                className="w-full overflow-hidden  "
                aria-label="Example table with dynamic content"
            >
                <TableHeader className="" columns={columns}>
                    {(column: any) => (
                        <TableColumn className=" text-center" key={column.key}>
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
