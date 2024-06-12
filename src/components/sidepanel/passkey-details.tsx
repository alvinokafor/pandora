import React from "react";
import { ReuploadIcon, PasskeyIcon, CopyIcon } from "@/assets/icons";
import { DocumentIcon } from "./icons";
import { UserProfileTab } from "../user";

export default function PasskeyDetails() {
  return (
    <div>
      <div className="fixed w-[250px] overflow-y-scroll top-3 bottom-0">
        <UserProfileTab />
        <div className="px-4">
          <div className="flex pt-8 flex-col gap-y-5 pb-6">
            <PasskeyIcon />
            <div className="flex items-center justify-between">
              <p className="font-medium text-base text-marian-blue">
                Catalog Password
              </p>
              <img src="/beneficiaries-img.png" alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <div>
              <h3 className="font-medium text-base text-heading-black">
                Description
              </h3>
              <p className="text-slate-grey text-sm">
                This is the login detail for my catalog finance mobile app{" "}
              </p>
            </div>
            <div className="flex flex-col gap-y-1.5">
              <h4 className="font-medium text-sm">Identifier</h4>
              <div className="flex items-center gap-x-2">
                <p className="border rounded-md p-2 w-full">
                  alvin2k@gmail.com
                </p>
                <CopyIcon />
              </div>
            </div>

            <div className="flex flex-col gap-y-1.5">
              <h4 className="font-medium text-sm">Passkey</h4>
              <div className="flex justify-between items-center gap-x-2">
                <p className="border w-full rounded-md p-2 ">12345678990</p>
                <CopyIcon />
              </div>
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
