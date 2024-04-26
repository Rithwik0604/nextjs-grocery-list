import React from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Link,
    Divider,
} from "@nextui-org/react";
import { ResetList } from "@/lib/data";
import Buttons from "./button";

export default function Uncheck() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Card className="max-w-[75%]">
                <CardHeader className="flex gap-3 items-center justify-center mb-8 ">
                    <p>Are you sure you want to reset your List? This would delete all items.</p>
                </CardHeader>
                <CardBody className="flex gap-3 items-center justify-center  mt-8 ">
                    <div className="flex flex-row gap-8 ">
                        <Button as={Link} href="/">
                            {" "}
                            No! Go back{" "}
                        </Button>
                        <Buttons uncheckAll={ResetList}></Buttons>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
