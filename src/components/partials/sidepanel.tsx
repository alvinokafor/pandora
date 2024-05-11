import React from "react";
import { UserProfileTab } from "../user";
import { CreateABox } from "../general-ui";

export default function Sidepanel() {
  return (
    <div className="border-l  h-screen px-2 pt-4">
      <UserProfileTab />
      <div className="flex justify-center pt-8">
        <CreateABox />
      </div>
    </div>
  );
}
