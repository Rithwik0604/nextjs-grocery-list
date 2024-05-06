"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Category from "./category";

interface Props {
    list: ListItem[];
    passDown: ItemFunctions;
}

export default function OtherLists({ list, passDown }: Props) {
    const { data: session } = useSession();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (session) {
            setLoading(false);
        }
    }, [session]);

    return (
        !loading && (
            <div className="w-screen flex flex-col items-start mt-10">
                <p className="ml-4 text-3xl " >Other{"'s"} Lists</p>
                {list.map((itemList: any, index: number) => (
                    <Category
                        list={itemList.list}
                        passDown={passDown}
                        key={index}
                        title={itemList.firstName + " " + itemList.secondName}
                        open={false}
                    />
                ))}
            </div>
        )
    );
}
