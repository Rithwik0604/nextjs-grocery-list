import Client from "./client";
import ShareList from "./shareList";
import { getConnections, changeEdit, removeConnection } from "@/lib/data";
import { Button } from "@nextui-org/react";
import Link from "next/link";

type Search = {
    searchParams: {
        r: number;
    };
};

export default async function Share({ searchParams }: Search) {
    let data: any = await getConnections();

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center p-4 gap-10 ">
            <Client />
            <ShareList
                listData={data}
                changeEdit={changeEdit}
                removeConnection={removeConnection}
            />
            <div className="flex flex-row gap-8">
                <Button as={Link} href="/">
                    Go Back
                </Button>
                <Button as={Link} href="/share/add">
                    Add Share-ee
                </Button>
            </div>
        </div>
    );
}
