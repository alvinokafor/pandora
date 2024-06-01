import React from "react";
import { ShareOrangeBg } from "@/assets/icons";

export default function UserActivityItem() {
  return (
    <div className="flex gap-x-2">
      <div>
        <ShareOrangeBg />
      </div>
      <div className="flex flex-col">
        <div>
          <p className="text-base">
            You invited Sam to view <span className="font-bold">PassKey</span>
          </p>
        </div>
        <div className="flex justify-end">
          <p className="text-xs text-gray-500">19 mins ago</p>
        </div>
      </div>
    </div>
  );
}
