import React from "react";
import CategoryBoxView from "./category-box-view";
import { RecentBoxes } from "../home";

export default function CategoryPageWithBoxes() {
  return (
    <div className="flex flex-col gap-y-6 mt-6">
      <div className="flex justify-between items-center">
        <h2 className="heading-black font-medium">Your Categories</h2>
      </div>
      <div className="flex gap-5 mb-2">
        <CategoryBoxView />
        <CategoryBoxView />
        <CategoryBoxView />
      </div>
      <div>
        <RecentBoxes />
      </div>
    </div>
  );
}
