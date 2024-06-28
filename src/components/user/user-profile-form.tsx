import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

interface CountryArray {
  name: {
    common: string;
  };
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
}

export default function UserProfileForm() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryData, setSelectedCountryData] =
    useState<CountryArray | null>(null);

  const { isLoading, error, data, isFetched } = useQuery({
    queryKey: ["countries"],
    queryFn: () =>
      fetch("https://restcountries.com/v3.1/all").then((res) => res.json()),
  });

  useEffect(() => {
    if (selectedCountry && isFetched) {
      const countryData = data.find(
        (country: CountryArray) => country.name.common === selectedCountry
      );
      setSelectedCountryData(countryData || null);
      // console.log(countryData);
    }
  }, [selectedCountry, data, isFetched]);

  const onCountryChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    // console.log("Selected country from on Change Handler:", e.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading countries</div>;

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
            <label htmlFor="country" className="font-medium text-sm">
              Country
            </label>

            <div className="border border-[#D0D5DD] rounded-md py-2 px-3 font-normal text-base focus:outline-none focus:border-slate-800 flex items-center gap-x-2">
              <section className="w-5">
                {selectedCountry && selectedCountryData && (
                  <img src={selectedCountryData?.flags?.png} alt="flag" />
                )}
              </section>
              <section>
                <select
                  onChange={onCountryChangeHandler}
                  name="country"
                  id="countryID"
                  className="bg-transparent text-base focus:outline-none focus:border-slate-800"
                >
                  <option value="">--Select Country--</option>
                  {isFetched &&
                    data.map((country: CountryArray) => (
                      <option
                        key={country.name.common}
                        value={country.name.common}
                      >
                        {country.name.common}
                      </option>
                    ))}
                </select>
              </section>
            </div>
          </div>

          <div className="flex flex-col gap-y-1">
            <label htmlFor="phoneNumber" className="font-medium text-sm">
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
