import { Copy } from "lucide-react";
import { CreateBox, BoxIcon, AddIcon } from "@/assets/icons";

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

export function AddFileModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="py-3 px-6 bg-base-purple text-base rounded-lg shadow-sm text-white transition-all duration-100 hover:text-neutral-50 hover:shadow-md flex items-center gap-x-2">
          Create A Box <CreateBox />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="">
          <div className="pb-4">
            <BoxIcon />
          </div>
          <DialogTitle className="font-medium">Create a Box</DialogTitle>
          <DialogDescription>
            Use boxes to keep your files together{" "}
          </DialogDescription>
        </DialogHeader>

        <form action="">
          <div className="flex flex-col gap-y-3 mb-4 pt-2">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="box-name" className="font-medium text-sm">
                Box Name
              </label>
              <input
                id="box-name"
                className="border rounded-md py-2 px-3 placeholder:text-slate-grey font-normal text-base focus:outline-none focus:border-slate-800"
                placeholder="Untitled Box"
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

            <div className="flex flex-col gap-y-3 mt-2">
              <p className="text-sm text-slate-grey">No beneficiary Added</p>
              <p className="flex items-center text-primary-shade text-sm gap-x-2">
                <AddIcon /> Add Beneficiary
              </p>
            </div>
          </div>

          <div className="">
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
      </DialogContent>
    </Dialog>
  );
}
