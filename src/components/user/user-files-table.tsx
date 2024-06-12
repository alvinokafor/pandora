import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PasskeyIcon, KebabMenu, AddIconGrey } from "@/assets/icons";
import AddFileModal from "./add-file-modal";

interface userFileProps {
  fileName: string;
  size: string;
}

const userFiles: userFileProps[] = [
  {
    fileName: "Binance Passkey",
    size: "1MB",
  },
  {
    fileName: "FirstBank Password",
    size: "--",
  },
  {
    fileName: "Asaba Land Deed.pdf",
    size: "33.5KB",
  },
  {
    fileName: "Onitsha Land Deed.pdf",
    size: "20KB",
  },
  {
    fileName: "My Will",
    size: "5KB",
  },
  {
    fileName: "Nigeria's Financial Budget",
    size: "--",
  },
  {
    fileName: "Yearly Goals",
    size: "1.2MB",
  },
];

export default function UserFilesTable() {
  return (
    <div className="pt-2">
      <div className="flex justify-between items-center pb-3">
        <h2 className="text-charcoal font-medium">File</h2>
        <AddFileModal />
      </div>

      <div className=" h-[250px] overflow-y-scroll">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead className="">Size</TableHead>
              <TableHead className=""></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userFiles.map((file: userFileProps) => (
              <TableRow
                key={file.fileName}
                className="border-b border-b-gray-200"
              >
                <TableCell className="font-medium flex items-center gap-x-2">
                  <PasskeyIcon /> {file.fileName}
                </TableCell>
                <TableCell className="">{file.size}</TableCell>
                <TableCell className="">
                  <KebabMenu />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
