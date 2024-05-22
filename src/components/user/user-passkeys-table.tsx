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

interface passkeyProps {
  passkeyName: string;
  passkeyAccount: string;
  accountWebsite: string;
}

const passkeys: passkeyProps[] = [
  {
    passkeyName: "Catalog PassKey",
    passkeyAccount: "Catalog",
    accountWebsite: "catalogapp.io",
  },
  {
    passkeyName: "Circooles PassKey",
    passkeyAccount: "Circooles",
    accountWebsite: "getcircooles.com",
  },
  {
    passkeyName: "CommandR Token",
    passkeyAccount: "Command+R",
    accountWebsite: "cmdr.ai",
  },
  {
    passkeyName: "Catalog PassKey",
    passkeyAccount: "Catalog",
    accountWebsite: "catalogapp.io",
  },
  {
    passkeyName: "Circooles PassKey",
    passkeyAccount: "Circooles",
    accountWebsite: "getcircooles.com",
  },
  {
    passkeyName: "Asaba Land Deed.pdf",
    passkeyAccount: "Command+R",
    accountWebsite: "cmdr.ai",
  },
];

export default function UserPasskeysTable() {
  return (
    <div className="pt-2">
      <div className="flex justify-between items-center pb-3">
        <h2 className="text-gun-metal font-medium">Passkeys</h2>
        <button className="border border-gray-300 text-gray-700 text-sm py-2 px-3 rounded-lg transition-all duration-100 hover:text-gray-800 hover:shadow-sm hover:underline flex items-center gap-x-1">
          <AddIconGrey /> New Passkey
        </button>
      </div>

      <div className=" h-[250px] overflow-y-scroll">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="">Account</TableHead>
              <TableHead className="">Name</TableHead>
              <TableHead className=""></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {passkeys.map((box: passkeyProps) => (
              <TableRow
                key={box.passkeyName}
                className="border-b border-b-gray-200"
              >
                <TableCell className="font-medium flex items-centr gap-x-2">
                  <div>
                    <PasskeyIcon />
                  </div>
                  <div className="flex flex-col">
                    <p>{box.passkeyAccount}</p>
                    <p>{box.accountWebsite}</p>
                  </div>
                </TableCell>
                <TableCell className="">{box.passkeyName}</TableCell>
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
