import React from "react";

import { addConnection } from "@/lib/data";
import Form from "./form";

async function outerHandle(data: FormData) {
    "use server";
    const email: string = data.get("email")?.toString()!;
    const edit = data.get("edit") === "on";

    const result = await addConnection(email, edit);
    return result;
}

export default function Show() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center p-4 gap-10 ">
            <Form handle={outerHandle} />
        </div>
    );
}
