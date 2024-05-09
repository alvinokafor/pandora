import React from "react";
import { CreateABox } from "../general-ui";
import { Leaf } from "@/assets/icons";

export default function EmptyState() {
  return (
    <div className="bg-[#039855]/20 flex rounded-2xl relative overflow-hidden mt-6">
      <div className="basis-2/3 py-12 pl-10">
        <h2 className="text-success-dark text-3xl mb-4">Getting Started</h2>
        <p className="text-success-dark/70 text-lg mb-8">
          Unlock your storage potential! Begin by uploading items - the first 3
          categories are free with 9 uploads included.
        </p>
        <CreateABox />
      </div>
      <div className="basis-1/3 flex justify-end absolute right-1 top-0">
        <Leaf />
      </div>
    </div>
  );
}
