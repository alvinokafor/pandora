import React from "react";
import { NotificationBell, ChevronDown } from "@/assets/icons";
import UserProfilePhotoCard from "./userProfilePhotoCard";

export default function UserProfileTab() {
  return (
    <div className="border-b pb-4 px-2">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-sub-heading-black">Thursday</p>
          <p className="text-sm text-sub-heading-black">16th May, 2023</p>
        </div>
        <div className="flex items-center gap-x-1.5">
          <NotificationBell />
          <UserProfilePhotoCard />
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}
