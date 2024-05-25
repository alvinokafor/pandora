import React from "react";
import { UserProfileTab, UserActivityTable } from "../user";
import CircularProgressBar from "./circular-progress-bar";
import { CreateABox } from "../general-ui";
import {
  FileDetails,
  HomeSidepanel,
  EmptySidepanel,
  PasskeyDetails,
} from "../sidepanel";

export default function Sidepanel() {
  return (
    <div className="h-screen pt-4 relative">
      {/* <HomeSidepanel /> */}
      {/* <FileDetails /> */}
      <PasskeyDetails />
    </div>
  );
}
