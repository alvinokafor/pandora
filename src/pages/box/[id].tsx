import { AppLayout } from "@/layouts";
import { Search } from "@/components/general-ui";
import { UserFilesTable, UserPasskeysTable } from "@/components/user";
import { PandoraBox } from "@/assets/icons";

export default function BoxDetails() {
  return (
    <AppLayout title="Home - Pandora">
      <div className="pb-4">
        <Search />
        <div>
          <div className="flex justify-between items-center pt-2 pb-4 border-b pl-1">
            <h1 className="flex items-center gap-x-2 font-medium text-xl text-footer-header-grey">
              <PandoraBox /> Box 1
            </h1>
            <div className="flex items-center gap-x-3">
              <button className="border border-gray-300 text-charcoal text-sm py-2 px-3 rounded-lg transition-all duration-100 hover:text-gray-800 hover:shadow-sm hover:underline">
                Add Beneficiary
              </button>
              <button className="border border-gray-300 text-charcoal text-sm py-2 px-3 rounded-lg transition-all duration-100 hover:text-gray-800 hover:shadow-sm hover:underline">
                View Beneficiaries
              </button>
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-y-6 pb-4 ">
            <UserPasskeysTable />
            <UserFilesTable />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}