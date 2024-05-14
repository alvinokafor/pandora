import React from "react";
import { UserProfileTab, UserActivityTable } from "../user";
import { CreateABox } from "../general-ui";
import CircularProgressBar from "./circular-progress-bar";

export default function Sidepanel() {
  return (
    <div className="border-l h-screen pt-4 relative">
      <div className="fixed w-[250px] overflow-y-scroll top-3 bottom-0">
        <UserProfileTab />
        <div className="flex justify-center pt-8 flex-col items-center gap-y-5 pb-6">
          <CreateABox />

          <div className="mt-4">
            <CircularProgressBar progress={90} radius={80} />
          </div>
        </div>

        <div className="border-t px-2 pt-2">
          <UserActivityTable />
        </div>
      </div>
    </div>
  );
}
