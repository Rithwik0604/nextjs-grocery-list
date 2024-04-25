"use client";

import { Button, Link } from "@nextui-org/react";

import React from "react";

export default function AllButtons() {
    return (
        <footer className="w-full  flex flex-row  justify-center gap-20 ">
            <Button>Uncheck All</Button>
            <Button>Reset List</Button>
            <Button href="/add" as={Link}>
                Add Item
            </Button>
        </footer>
    );
}
