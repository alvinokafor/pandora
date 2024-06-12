import React from "react";
import { UserProfileTab, UserActivityTable } from "../user";
import { CircularProgressBar } from "../partials";
import { CreateABox } from "../general-ui";

export default function HomeSidepanel() {
  return (
    <div>
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
