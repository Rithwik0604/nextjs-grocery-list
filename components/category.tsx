"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Accordion, AccordionItem, Spinner } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import Item from "./Item";
import { capitalizeFirstLetter } from "@/lib/title";

interface Props {
    list: ListItem[];
    passDown: ItemFunctions;
    title?: string;
    open: boolean;
}

function sortList(list: ListItem[]) {
    const sortedList: SortedList = {};

    // Iterate through each item
    list.forEach((item: ListItem) => {
        // Check if the category already exists in the sortedList
        if (!sortedList[item.category]) {
            // If category doesn't exist, create an empty array for it
            sortedList[item.category] = [];
        }
        // Push the item to the array corresponding to its category
        sortedList[item.category].push(item);
    });

    return sortedList;
}

export default function Category(props: Props) {
    console.info("RENDERING CATEGORY");

    const { data: session } = useSession();
    const [loading, setLoading] = useState(true);
    const [sortedList, setSortedList] = useState({});

    const list = props.list;
    useEffect(() => {
        if (session) {
            setLoading(false);
            setSortedList(sortList(list));
        } else {
            setInterval(() => {
                setLoading(false);
            }, 500);
        }
    }, [session, list]);

    const mapped = () => {
        if (list.length === 0) {
            return <p>No items</p>;
        }

        let sortedList = sortList(list);

        let accordionItems = [];

        for (const category in sortedList) {
            if (sortedList.hasOwnProperty(category)) {
                // Push each accordion item JSX element into the array
                accordionItems.push(
                    <Accordion
                        isCompact
                        className="p-0 m-0 "
                        key={category}
                        variant="splitted"
                    >
                        <AccordionItem
                            className="  border-foreground-500 overflow-hidden border-1 mb-8 p-0"
                            // title={capitalizeFirstLetter(category)}
                            title={capitalizeFirstLetter(category)}
                        >
                            <Item
                                items={sortedList[category]}
                                funcs={props.passDown}
                            />
                        </AccordionItem>
                    </Accordion>
                );
            }
        }
        return accordionItems;
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            {session ? (
                <Accordion
                    variant="bordered"
                    className="w-[99%] m-0 text-xs "
                    defaultExpandedKeys={props.open ? ["main"] : []}
                >
                    <AccordionItem
                        key="main"
                        className="text-xs"
                        title={props.title ? props.title : "Show List"}
                    >
                        {/* <Accordion className="" variant="splitted"> */}
                        {mapped()}
                        {/* </Accordion> */}
                    </AccordionItem>
                </Accordion>
            ) : (
                <p>Login to create or see your list!</p>
            )}
        </>
    );
}
