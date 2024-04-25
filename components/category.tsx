"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import Item from "./Item";

interface Props {
    list: ListItem[];
    passDown : ItemFunctions,

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
    // let list = [1, 2, 3];

    const { data: session } = useSession();

    const list = props.list;

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
                    <Accordion key={category} variant="splitted">
                        <AccordionItem
                            className="border-foreground-500 border-1 mb-8 p-0"
                            title={category}
                        >
                            <Item items={sortedList[category]} funcs={props.passDown} />
                        </AccordionItem>
                    </Accordion>
                );
            }
        }

        return accordionItems;
    };

    // let title = list.length <=0 ?  "Show List" : "Show List - " + list.length;

    return (
        <>
            {session ? (
                <Accordion variant="bordered" className="w-[99%] m-0">
                    <AccordionItem title="Show List">
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
