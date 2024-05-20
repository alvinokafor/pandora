import React, { useState } from "react";
import { BoxIcon } from "@/assets/icons";
import { Progress } from "@/components/ui/progress";

export default function BoxView() {
  const [progress, setProgress] = useState(43);

  return (
    <div className="w-auto border border-gray-200 py-6 px-5 rounded-3xl flex flex-col gap-y-6">
      <div>
        <BoxIcon />
      </div>
      <div className="flex flex-col gap-y-1">
        <h4 className="text-gray-700 text-lg font-medium">Box 1</h4>
        <p className="text-gray-900 text-sm mb-1">1/3 items</p>
        <div>
          <Progress value={progress} className="" />
        </div>
      </div>
    </div>
  );
}
