"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Category() {
    let list = [1, 2, 3];

    const mapped = () => {
        return list.map((v, i) => (
            <AccordionItem
                className="border-foreground border-1 mb-8 "
                key={i}
                aria-label={v.toString()}
                title={v.toString()}
            >
                This is accordion {v}
            </AccordionItem>
        ));
    };

    return (
        <Accordion
            variant="bordered"
            className="w-[99%] m-0"
        >
            <AccordionItem title="Show List">
                <Accordion className="" variant="splitted">
                    {mapped()}
                </Accordion>
            </AccordionItem>
        </Accordion>
    );
}
