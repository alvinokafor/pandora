import { Copy } from "lucide-react";
import {
  CreateBox,
  BoxIcon,
  PasskeyIcon,
  AddIcon,
  AddIconGrey,
} from "@/assets/icons";

import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddPasskeyModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border border-gray-300 text-gray-700 text-sm py-2 px-3 rounded-lg transition-all duration-100 hover:text-gray-900 hover:shadow-md flex items-center gap-x-1">
          <AddIconGrey /> New Passkey
        </button>
      </DialogTrigger>
      <DialogContent>
        <div className="max-h-[500px] overflow-y-scroll mt-5 pr-4">
          <DialogHeader className="">
            <div className="pb-4">
              <PasskeyIcon />
            </div>
            <DialogTitle className="font-medium">Add Passkey</DialogTitle>
            <DialogDescription>
              Add a new passkey to your{" "}
              <span className="font-medium">Finance Passwords</span> box{" "}
            </DialogDescription>
          </DialogHeader>

          <form action="">
            <div className="flex flex-col gap-y-3 mb-4 pt-2 mt-2">
              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor="passkey-account"
                  className="font-medium text-sm"
                >
                  Account
                </label>
                <input
                  id="passkey-account"
                  className="border rounded-md py-2 px-3 placeholder:text-slate-grey font-normal text-base focus:outline-none focus:border-slate-800"
                  placeholder="Binance"
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor="passkey-identifier"
                  className="font-medium text-sm"
                >
                  Identifier
                </label>
                <input
                  id="passkey-identifier"
                  className="border rounded-md py-2 px-3 placeholder:text-slate-grey font-normal text-base focus:outline-none focus:border-slate-800"
                  placeholder="you@untitledui.com"
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <label htmlFor="box-name" className="font-medium text-sm">
                  Passkey
                </label>
                <input
                  id="box-name"
                  className="border rounded-md py-2 px-3 placeholder:text-slate-grey font-normal text-base focus:outline-none focus:border-slate-800"
                  placeholder="you@untitledui.com"
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <label htmlFor="box-name" className="font-medium text-sm">
                  Description
                </label>
                <textarea
                  name="description"
                  rows={4}
                  placeholder="Enter a Description..."
                  className="border rounded-md py-2 px-3 placeholder:text-slate-grey font-normal text-base focus:outline-none focus:border-slate-800"
                ></textarea>
              </div>
            </div>

            <div className="mt-8">
              <DialogFooter className="flex gap-x-2">
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
                  Create
                </button>
              </DialogFooter>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
