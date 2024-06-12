import { PeopleIcon } from "@/assets/icons";
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

export default function AddBeneficiaryModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border border-gray-300 text-charcoal text-sm py-2 px-3 rounded-lg transition-all duration-100 hover:text-gray-800 hover:shadow-sm hover:underline">
          Add Beneficiaries
        </button>
      </DialogTrigger>
      <DialogContent>
        <div className="max-h-[500px] overflow-y-scroll mt-5 pr-4">
          <DialogHeader className="">
            <div className="pb-4">
              <PeopleIcon />
            </div>
            <DialogTitle className="font-medium">Add Beneficiaries</DialogTitle>
            <DialogDescription>
              Add beneficiaries to view this file. They wont be notified that
              they were invited
            </DialogDescription>
          </DialogHeader>

          <form action="">
            <div className="flex flex-col gap-y-3 mb-4 pt-2 mt-2">
              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor="beneficiary-name"
                  className="font-medium text-sm"
                >
                  Name
                </label>
                <input
                  id="beneficiary-name"
                  className="border rounded-md py-2 px-3 placeholder:text-slate-grey font-normal text-base focus:outline-none focus:border-slate-800"
                  placeholder="Firstname Surname"
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <label htmlFor="email" className="font-medium text-sm">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="border rounded-md py-2 px-3 placeholder:text-slate-grey font-normal text-base focus:outline-none focus:border-slate-800"
                  placeholder="you@untitledui.com"
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor="beneficiary-phone"
                  className="font-medium text-sm"
                >
                  Phone Number
                </label>
                <input
                  id="beneficiary-phone"
                  type="number"
                  className="border rounded-md py-2 px-3 placeholder:text-slate-grey font-normal text-base focus:outline-none focus:border-slate-800"
                  placeholder="you@untitledui.com"
                />
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
