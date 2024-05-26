import React from "react";
import { PandoraBox } from "@/assets/icons";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface beneficiaryProps {
  beneficiaryName: string;
  beneficiaryPhone: number;
  status: string;
  beneficiaryEmail: string;
}

const beneficiaries: beneficiaryProps[] = [
  {
    beneficiaryName: "Catalog PassKey",
    beneficiaryPhone: +234 - 816 - 26869 - 3467,
    beneficiaryEmail: "Hellokitty@gmail.com",
    status: "Accepted",
  },
  {
    beneficiaryName: "Circooles PassKey",
    beneficiaryPhone: +234 - 816 - 26869 - 3467,
    beneficiaryEmail: "Hellokitty@gmail.com",
    status: "Accepted",
  },
  {
    beneficiaryName: "CommandR Token",
    beneficiaryPhone: +234 - 816 - 26869 - 3467,
    beneficiaryEmail: "Hellokitty@gmail.com",
    status: "Pending",
  },
  {
    beneficiaryName: "Catalog PassKey",
    beneficiaryPhone: +234 - 816 - 26869 - 3467,
    beneficiaryEmail: "Hellokitty@gmail.com",
    status: "Accepted",
  },
  {
    beneficiaryName: "Circooles PassKey",
    beneficiaryPhone: +234 - 816 - 26869 - 3467,
    beneficiaryEmail: "Hellokitty@gmail.com",
    status: "Accepted",
  },
  {
    beneficiaryName: "Asaba Land Deed.pdf",
    beneficiaryPhone: +234 - 816 - 26869 - 3467,
    beneficiaryEmail: "Hellokitty@gmail.com",
    status: "Pending",
  },
];

export default function BeneficiariesTable() {
  return (
    <div>
      <div className="flex justify-between items-center pt-2 pb-4 border-b pl-1">
        <h1 className="flex items-center gap-x-2 font-medium text-xl text-footer-header-grey">
          <PandoraBox /> Beneficiaries for Box 1
        </h1>
        <div className="flex items-center gap-x-3">
          <button className="border border-gray-300 text-charcoal text-sm py-2 px-3 rounded-lg transition-all duration-100 hover:text-gray-800 hover:shadow-sm hover:underline">
            Add Beneficiaries
          </button>
        </div>
      </div>

      <div className="">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead className="">Phone</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead className=""></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {beneficiaries.map((beneficiary: beneficiaryProps) => (
              <TableRow
                key={beneficiary.beneficiaryName}
                className="border-b border-b-gray-200"
              >
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <p>{beneficiary.beneficiaryName}</p>
                    <p>{beneficiary.beneficiaryEmail}</p>
                  </div>
                </TableCell>
                <TableCell className="">
                  {beneficiary.beneficiaryPhone}
                </TableCell>
                <TableCell className="">{beneficiary.status}</TableCell>

                <TableCell className="">
                  <p>Remove</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
