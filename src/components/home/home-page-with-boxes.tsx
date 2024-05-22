import React from "react";
import BoxView from "./box-view";
import RecentBoxes from "./recent-boxes";

export default function HomePageWithBoxes() {
  return (
    <div className="flex flex-col gap-y-6 mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-charcoal font-medium">Your Boxes</h2>
        <button className="border border-gray-300 text-gray-700 text-sm py-2 px-3 rounded-lg transition-all duration-100 hover:text-gray-800 hover:shadow-sm hover:underline">
          View All
        </button>
      </div>
      <div className="grid grid-cols-3 gap-x-5 mb-2">
        <BoxView />
        <BoxView />
        <BoxView />
      </div>
      <div>
        <RecentBoxes />
      </div>
    </div>
  );
}
