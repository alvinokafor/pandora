import React, { useState } from "react";
import { BoxIcon, DocumentIcon } from "@/assets/icons";

export default function CategoryBoxView() {
  return (
    <div className="w-[247px] border border-gray-200 py-6 px-5 rounded-3xl flex flex-col gap-y-6">
      <div>
        <DocumentIcon />
      </div>
      <div className="flex justify-between items-center">
        <h4 className="text-gray-700 text-lg font-medium">Documents</h4>
        <p className="text-gray-900 text-sm mb-1 font-semibold">7 items</p>
      </div>
    </div>
  );
}
