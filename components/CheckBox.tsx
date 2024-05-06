"use client";

import React from "react";

interface CheckBoxProps {
    defaultChecked: boolean;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}

export const CheckBox = ({
    defaultChecked,
    name,
    onChange,
    label = "",
}: CheckBoxProps) => {
    return (
        <div className="flex gap-2 items-center justify-center select-none " >
            <input
                type="checkbox"
                name={name}
                id={name}
                defaultChecked={defaultChecked}
                onChange={onChange}
                className="p-40 accent-primary-500 w-4 h-4 rounded-full cursor-pointer"
            />
            <label htmlFor={name}>{label}</label>
        </div>
    );
};
