import React from "react";
import { ReuploadIcon } from "@/assets/icons";
import { DocumentIcon } from "./icons";
import { UserProfileTab } from "../user";

export default function FileDetails() {
  return (
    <div>
      <div className="fixed w-[250px] overflow-y-scroll top-3 bottom-0">
        <UserProfileTab />
        <div className="px-4">
          <div className="flex pt-8 flex-col gap-y-5 pb-6">
            <DocumentIcon />
            <div className="flex items-center justify-between">
              <p className="font-medium text-base text-marian-blue">
                Asaba Land Deed
              </p>
              <img src="/beneficiaries-img.png" alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <div>
              <h3 className="font-medium text-lg text-heading-black">
                Description
              </h3>
              <p className="text-slate-grey text-sm">
                Incase someone doubts my inheritance
              </p>
            </div>
            <div className="flex flex-col gap-y-1.5">
              <h4 className="font-medium text-sm">Name</h4>
              <p className="border rounded-md p-2">Asaba Land Deed</p>

              <button className="flex items-center border border-gray-700 w-[180px] rounded-md py-1 gap-x-2 justify-center mt-4 font-medium transition-all duration-300 hover:border-gray-800  hover:-translate-y-0.5 active:translate-y-0">
                Reupload <ReuploadIcon />
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-y-2">
              <section className="flex items-center justify-between gap-x-2">
                <p className="text-sm text-[#92929D] whitespace-nowrap">
                  Created
                </p>
                <p className="text-sm text-marian-blue whitespace-pre-wrapped">
                  21 Apr 2021 10:12AM
                </p>
              </section>
              <section className="flex items-center justify-between gap-x-4">
                <p className="text-sm text-[#92929D] whitespace-nowrap">
                  Last Modified
                </p>
                <p className="text-sm text-marian-blue whitespace-pre-wrapped">
                  21 Apr 2021 10:12AM
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
