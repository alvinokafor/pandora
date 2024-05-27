import React, { useState } from "react";
import { RemoveIcon } from "@/assets/icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function RemoveBeneficiaryModal() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-[#B42318] text-base font-medium">Remove</button>
      </DialogTrigger>
      <DialogContent>
        <div className="mt-5 pr-4">
          <DialogHeader className="flex items-center flex-row gap-x-4">
            <div className="pb-4">
              <RemoveIcon />
            </div>
            <div>
              <DialogTitle className="font-medium pb-1.5">
                Remove this Beneficiary
              </DialogTitle>
              <DialogDescription>
                Are you sure you want to remove this beneficary? They will no
                longer have access to this file
              </DialogDescription>
            </div>
          </DialogHeader>

          <form action="">
            <DialogFooter>
              <div className="flex flex-row justify-between w-full mt-8 pl-8">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="dont-show-again"
                    name="dont-show-again"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 rounded-lg focus:ring-primary-500 focus:ring-opacity-50"
                  />
                  <label
                    htmlFor="dont-show-again"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Don't show again
                  </label>
                </div>

                <div className="flex gap-x-2 basis-1/2">
                  <DialogClose asChild>
                    <button
                      type="button"
                      className="basis-1/2 border rounded-lg py-2.5 text-charcoal font-medium"
                    >
                      Cancel
                    </button>
                  </DialogClose>

                  <button
                    type="submit"
                    className="basis-1/2 border rounded-lg py-2.5 text-white bg-base-purple"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
