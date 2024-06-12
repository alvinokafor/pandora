import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function UserProfileForm() {
  const { isPending, error, data, isFetched } = useQuery({
    queryKey: ["countries"],
    queryFn: () =>
      fetch("https://restcountries.com/v3.1/all").then((res) => res.json()),
  });

  if (isFetched) console.log(data);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center pb-4">
        <section>
          <h3 className="font-medium text-base text-heading-black pb-2">
            Two Factor Authentication{" "}
          </h3>
          <p className="text-slate-grey text-sm">
            Setup two factor authentication for your pandora account{" "}
          </p>
        </section>
        <section>toggle</section>
      </div>

      <form action="">
        <div className="flex flex-col gap-y-3 mb-4 pt-2 mt-2">
          <div className="flex flex-col gap-y-1">
            <label
              htmlFor="beneficiary-name"
              className="font-medium text-sm text-charcoal"
            >
              Name
            </label>
            <input
              id="beneficiary-name"
              className="border border-[#D0D5DD] rounded-md py-2 px-3 placeholder:text-heading-black font-normal text-base focus:outline-none focus:border-slate-800"
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
              className="border border-[#D0D5DD] rounded-md py-2 px-3 placeholder:text-heading-black font-normal text-base focus:outline-none focus:border-slate-800"
              placeholder="you@untitledui.com"
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <label htmlFor="beneficiary-phone" className="font-medium text-sm">
              Phone Number
            </label>
            <input
              id="beneficiary-phone"
              type="number"
              className="border border-[#D0D5DD] rounded-md py-2 px-3 placeholder:text-heading-black font-normal text-base focus:outline-none focus:border-slate-800"
              placeholder="you@untitledui.com"
            />
          </div>
        </div>
      </form>
      <div></div>
    </div>
  );
}
