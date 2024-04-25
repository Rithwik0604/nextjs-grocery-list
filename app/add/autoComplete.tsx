"use client";

import { AutocompleteItem } from "@nextui-org/react";
import React from "react";

interface Props {
    categories: string[];
}

export default function MyAC(props: Props) {
    const categories = props.categories;

    console.log(categories)

    return (
        <>
            {categories.map((c: string) => (
                <AutocompleteItem key={c} value={c}>
                    {c}
                </AutocompleteItem>
            ))}
        </>
    );
}
