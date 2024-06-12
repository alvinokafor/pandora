import { AppLayout } from "@/layouts";
import Link from "next/link";
import { Search } from "@/components/general-ui";
// import {
//   UserFilesTable,
//   UserPasskeysTable,
//   AddBeneficiaryModal,
// } from "@/components/user";
import {
  UserPasskeysTable,
  AddBeneficiaryModal,
  UserFilesTable,
} from "@/components/user";
import { PandoraBox } from "@/assets/icons";

export default function BoxDetails() {
  return (
    <AppLayout title="Box - Pandora">
      <div className="pb-4">
        <Search />
        {/* <div>
          <div className="flex justify-between items-center pt-2 pb-4 border-b pl-1">
            <h1 className="flex items-center gap-x-2 font-medium text-xl text-footer-header-grey">
              <PandoraBox /> Box 1
            </h1>
            <div className="flex items-center gap-x-3">
              <AddBeneficiaryModal />
              <p>Add Beneficiary</p>
              <Link href="/beneficiaries/2">
              <button className="border border-gray-300 text-charcoal text-sm py-2 px-3 rounded-lg transition-all duration-100 hover:text-gray-800 hover:shadow-sm hover:underline">
                View Beneficiaries
              </button>
              </Link>
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-y-6 pb-4 ">
            <UserPasskeysTable />
            <UserFilesTable />
          </div>
        </div> */}
        <div>
          <div className="flex justify-between items-center pt-2 pb-4 border-b pl-1">
            <h1 className="flex items-center gap-x-2 font-medium text-xl text-footer-header-grey">
              <PandoraBox /> Box 1
            </h1>
            <div className="flex items-center gap-x-3">
              <AddBeneficiaryModal />
              <Link href="/beneficiaries/2">
                <button className="border border-gray-300 text-charcoal text-sm py-2 px-3 rounded-lg transition-all duration-100 hover:text-gray-800 hover:shadow-sm hover:underline">
                  View Beneficiaries
                </button>
              </Link>
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-y-6 pb-4 ">
            {/* <UserPasskeysTable />
            <UserFilesTable /> */}
            <UserPasskeysTable />
            <UserFilesTable />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
