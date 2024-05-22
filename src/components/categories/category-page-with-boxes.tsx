import React from "react";
import CategoryBoxView from "./category-box-view";
import { RecentBoxes } from "../home";

export default function CategoryPageWithBoxes() {
  return (
    <div className="flex flex-col gap-y-6 mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-charcoal font-medium">Your Categories</h2>
      </div>
      <div className="grid grid-cols-3 gap-x-5 mb-2">
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
