import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { KebabMenu, PasskeyIcon } from "@/assets/icons";

interface boxesProps {
  fileName: string;
  dateUploaded: string;
  lastUpdated: string;
  size: string;
}

const boxes: boxesProps[] = [
  {
    fileName: "Binance Passkey",
    dateUploaded: "Jan 4, 2022",
    lastUpdated: "Jan 4, 2022",
    size: "1MB",
  },
  {
    fileName: "FirstBank Password",
    dateUploaded: "Jan 4, 2022",
    lastUpdated: "Jan 4, 2022",
    size: "--",
  },
  {
    fileName: "Asaba Land Deed.pdf",
    dateUploaded: "Jan 4, 2022",
    lastUpdated: "Jan 4, 2022",
    size: "33.5KB",
  },
  {
    fileName: "Onitsha Land Deed.pdf",
    dateUploaded: "Jan 4, 2022",
    lastUpdated: "Jan 4, 2022",
    size: "20KB",
  },
  {
    fileName: "My Will",
    dateUploaded: "Jan 4, 2022",
    lastUpdated: "Jan 4, 2022",
    size: "5KB",
  },
  {
    fileName: "Nigeria's Financial Budget",
    dateUploaded: "Jan 4, 2022",
    lastUpdated: "Jan 4, 2022",
    size: "--",
  },
  {
    fileName: "Yearly Goals",
    dateUploaded: "Jan 4, 2022",
    lastUpdated: "Jan 4, 2022",
    size: "1.2MB",
  },
];

export default function RecentBoxes() {
  return (
    <div className="border border-gray-200 py-5 rounded-md">
      <div className="px-5">
        <h2 className="text-charcoal font-medium pb-2">Recent</h2>
      </div>
      <div>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="">File Name</TableHead>
              <TableHead className="">Date Updated</TableHead>
              <TableHead className="">Last Updated</TableHead>
              <TableHead className="">Size</TableHead>
              <TableHead className=""></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {boxes.map((box: boxesProps) => (
              <TableRow
                key={box.fileName}
                className="border-b border-b-gray-200"
              >
                <TableCell className="font-medium flex items-center gap-x-2">
                  <PasskeyIcon /> {box.fileName}
                </TableCell>
                <TableCell className="">{box.dateUploaded}</TableCell>
                <TableCell className="">{box.lastUpdated}</TableCell>
                <TableCell className="">{box.size}</TableCell>
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
