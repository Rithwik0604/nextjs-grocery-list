"use client";

import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Icons } from "@/lib/Icons";

interface Props {
    data: Set<string>;
    label: string;
    name: string;
    value? : string;
}

export default function AutoC({ data, label, name, value="" }: Props) {
    let autoItemsElements: JSX.Element[] = [];

    const autoItems = data.forEach((d) =>
        autoItemsElements.push(
            <AutocompleteItem key={d} value={d}>
                {d}
            </AutocompleteItem>
        )
    );

    autoItems;

    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Autocomplete
                isRequired
                name={name}
                allowsCustomValue
                placeholder={label}
                startContent={Icons.category}
                className="max-w-xs"
                defaultInputValue={value}
            >
                {autoItemsElements}
            </Autocomplete>
        </div>
    );
}
