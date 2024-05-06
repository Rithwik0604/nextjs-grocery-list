"use client";

import { Icons } from "@/lib/Icons";
import {
    Checkbox,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react";
import React, { useState } from "react";

type ShareListProps = {
    listData: [Connection];
    changeEdit: (id: number, canEdit: boolean) => void;
    removeConnection: (id: number) => void;
};

export default function ShareList({
    listData,
    changeEdit,
    removeConnection,
}: ShareListProps) {
    const [rows, setRows] = useState<Connection[]>(listData);

    function remove(id: number) {
        // Create a new array with the rows excluding the one to be removed
        removeConnection(id);
        const updatedRows = rows.filter((row) => row.id !== id);
        // Set the state with the updated array
        setRows(updatedRows);
    }

    return (
        // <div className="w-full border border-red-500 flex flex-col items-start p-0" >
        <>
            <h3>{"You're sharing with:"}</h3>
            <Table
                aria-label="Example static collection table"
                className=" w-screen md:w-1/2 h-1/2 "
            >
                <TableHeader className="select-none">
                    <TableColumn className="text-center">NAME</TableColumn>
                    <TableColumn className="text-center">EMAIL</TableColumn>
                    <TableColumn className="text-center">EDIT</TableColumn>
                    <TableColumn className="text-center">REMOVE</TableColumn>
                </TableHeader>
                <TableBody
                    className="scale-75  tex-center"
                    emptyContent={"You're not sharing with anyone."}
                >
                    {rows === undefined
                        ? []
                        : rows!.map((row: Connection, index: number) => (
                              <TableRow className="text-center" key={index}>
                                  <TableCell>
                                      {row.User2.firstName +
                                          " " +
                                          row.User2.secondName}
                                  </TableCell>
                                  <TableCell>
                                      <Popover className="cursor-pointer">
                                          <PopoverTrigger className="cursor-pointer">
                                              {row.user2Email.slice(0, 10) +
                                                  "..."}
                                          </PopoverTrigger>
                                          <PopoverContent>
                                              {row.user2Email}
                                          </PopoverContent>
                                      </Popover>
                                  </TableCell>
                                  <TableCell>
                                      <Checkbox
                                          defaultSelected={row.canEdit}
                                          onChange={(e) =>
                                              changeEdit(
                                                  row.id,
                                                  e.target.checked
                                              )
                                          }
                                      ></Checkbox>
                                      {/* {row.canEdit ? "Yes" : "No"} */}
                                  </TableCell>
                                  <TableCell>
                                      <span
                                          className="cursor-pointer"
                                          onClick={() => remove(row.id)}
                                      >
                                          {Icons.delete}
                                      </span>
                                  </TableCell>
                              </TableRow>
                          ))}
                </TableBody>
            </Table>
        </>
        // </div>
    );
}
