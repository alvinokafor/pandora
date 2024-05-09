import React from "react";
import { CreateBox } from "@/assets/icons";

export default function CreateABox() {
  return (
    <button className="py-3 px-6 bg-base-purple text-base rounded-lg shadow-sm text-white transition-all duration-100 hover:text-neutral-50 hover:shadow-md flex items-center gap-x-2">
      Create A Box <CreateBox />
    </button>
  );
}
