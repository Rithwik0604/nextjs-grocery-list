import { Link, Button } from "@nextui-org/react";
import "./icons.css";

export default function Custom404() {
    return (
        <div className=" w-full h-screen flex flex-col items-center justify-center gap-4">
            <h1>404 - Page Not Found</h1>
            <Button as={Link} className="hover:cursor-pointer" href="/">
                Go Back
            </Button>
        </div>
    );
}
