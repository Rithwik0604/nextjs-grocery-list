"use client";

import React, { useState, useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { getData } from "../api/getData";
// import handler from "../data/getData";

export default function Category() {
    let list = [1, 2, 3];

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const result = await handler();
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // const data = getData();

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
        <Accordion variant="bordered" className="w-[99%] m-0">
            <AccordionItem title="Show List">
                <Accordion className="" variant="splitted">
                    {mapped()}
                </Accordion>
            </AccordionItem>
        </Accordion>
    );
}
