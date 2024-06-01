import React from "react";
import UserActivityItem from "./userActivityItem";

export default function UserActivityTable() {
  return (
    <div>
      <div>
        <h2 className="text-2xl text-heading-black ">Activity</h2>
        <p className="text-sm text-gray-400">Today</p>
      </div>

      <div className="pt-6">
        <UserActivityItem />
        <UserActivityItem />
        <UserActivityItem />
        <UserActivityItem />
        <UserActivityItem />
      </div>
    </div>
  );
}
