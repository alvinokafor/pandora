import { Copy } from "lucide-react";
import { AddIcon, AddIconGrey, DocumentIcon, UploadIcon } from "@/assets/icons";
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

export function AddFileModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border border-gray-300 text-gray-700 text-sm py-2 px-3 rounded-lg transition-all duration-100 hover:text-gray-800 hover:shadow-sm hover:underline flex items-center gap-x-1">
          <AddIconGrey /> New File
        </button>
      </DialogTrigger>
      <DialogContent>
        <div className="max-h-[500px] overflow-y-scroll mt-5 pr-4">
          <DialogHeader className="">
            <div className="pb-4">
              <DocumentIcon />
            </div>
            <DialogTitle className="font-medium">Add File</DialogTitle>
            <DialogDescription>
              Add a new file to your
              <span className="font-medium">Finance Passwords</span> box{" "}
            </DialogDescription>
          </DialogHeader>

          <form action="">
            <div className="flex flex-col gap-y-3 mb-4 pt-2">
              <div className="flex flex-col gap-y-1">
                <label htmlFor="box-name" className="font-medium text-sm">
                  Title
                </label>
                <input
                  id="box-name"
                  className="border rounded-md py-2 px-3 placeholder:text-slate-grey font-normal text-base focus:outline-none focus:border-slate-800"
                  placeholder="Asaba Land Deed"
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <label htmlFor="description" className="font-medium text-sm">
                  Description
                </label>
                <textarea
                  name="description"
                  rows={4}
                  placeholder="Enter a Description..."
                  className="border rounded-md py-2 px-3 placeholder:text-slate-grey font-normal text-base focus:outline-none focus:border-slate-800"
                ></textarea>
              </div>

              <div className="relative flex flex-col items-center justify-center space-y-2 border-2 border-accent/30 py-4 pl-2 w-full">
                <UploadIcon />
                <input
                  accept=".png, .jpeg, .jpg, .gif, .webp"
                  type="file"
                  id="image"
                  className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                />
                <p className="text-sm text-light-grey">
                  <span className="text-primary-shade">Click to upload</span>or
                  drag and drop
                </p>
                <p className="-mt-2 text-xs font-normal text-light-grey">
                  SVG, PNG, JPG or GIF (max. 800x400px)
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
                  Submit
                </button>
              </DialogFooter>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
