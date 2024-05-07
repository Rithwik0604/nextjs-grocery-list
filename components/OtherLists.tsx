"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Category from "./category";
import { Icons } from "@/lib/Icons";
import { it } from "node:test";

interface Props {
    list: ListItem[];
    passDown: ItemFunctions;
}

export default function OtherLists({ list, passDown }: Props) {
    const { data: session } = useSession();
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (session) {
            setLoading(false);
        }
    }, [session]);

    return (
        !loading && (
            <div className="w-screen flex flex-col items-start mt-10">
                <p
                    onClick={() => setShow(!show)}
                    className="ml-4 text-title text-center align-middle cursor-pointer select-none "
                >
                    Show Other Lists
                    {show ? Icons.show : Icons.dont_show}
                </p>
                {show && (
                    <>
                        {/* <p className="ml-4 text-3xl ">Other{"'s"} Lists</p> */}
                        {list.map((itemList: any, index: number) => (
                            <Category
                                list={itemList.list}
                                passDown={passDown}
                                key={index}
                                title={
                                    itemList.firstName +
                                    " " +
                                    itemList.secondName +
                                    "'s List"
                                }
                                open={false}
                                canEdit={itemList.canEdit}
                            />
                        ), console.log(list))}
                    </>
                )}
            </div>
        )
    );
}
