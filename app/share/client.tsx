"use client";

import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Checkbox,
    Divider,
    Popover,
    PopoverTrigger,
    Button,
    PopoverContent,
} from "@nextui-org/react";

function dontShow(checked: boolean) {
    window.localStorage.setItem("dontShowShare", checked ? "true" : "false");
}

function getStorage() {
    return window.localStorage.getItem("dontShowShare") === "true";
}

export default function Share() {
    // allows a re-render
    const [seed, setSeed] = React.useState(0);

    const show = !getStorage();

    const card = (show: boolean) => (
        <Card>
            <CardHeader>Share your lists!</CardHeader>
            <CardBody>
                You can share your list with others. Just add their Gmail
                address and they will be able to see your list. <br />
                You can choose whether they can edit or make changes to your
                list or not. <br />
            </CardBody>
            {show && (
                <CardFooter>
                    <div className=" w-full flex flex-col gap-4 ">
                        <Divider />
                        <div className="w-full flex flex-row-reverse">
                            <Checkbox
                                onChange={(e) => {
                                    dontShow(e.target.checked);
                                    setSeed(seed + 1);
                                }}
                            >
                                {"Don't"} show again
                            </Checkbox>
                        </div>
                    </div>
                </CardFooter>
            )}
        </Card>
    );

    const popOver = (
        <div className="fixed top-8 right-8" key={seed}>
            <Popover placement="left" showArrow={true}>
                <PopoverTrigger>
                    <div className="p-4 bg-ctm rounded-full cursor-pointer ">
                        ?
                    </div>
                </PopoverTrigger>
                <PopoverContent>{card(false)}</PopoverContent>
            </Popover>
        </div>
    );

    return <>{show ? card(true) : popOver}</>;
}
