import React from "react";
import { EmptyPaperIcon } from "@/assets/icons";
import { UserProfileTab } from "../user";

export default function EmptySidepanel() {
  return (
    <div className="h-full">
      <div className="h-full">
        <UserProfileTab />
        <div className="flex px-5 justify-start items-center h-[60vh]">
          <section className="flex flex-col gap-y-2">
            <h3 className="font-medium text-lg text-heading-black">
              No Item Selected
            </h3>
            <p className="text-slate-grey text-sm">
              Select an item to view details on this side panel
            </p>
            <div className="flex justify-center items-center pt-12">
              <EmptyPaperIcon />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
