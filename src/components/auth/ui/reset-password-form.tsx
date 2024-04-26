import React from "react";

export default function ResetPasswordForm() {
  return (
    <section className="text-center md:w-[360px]">
      <div>
        <h1 className="pb-8 text-2xl font-bold leading-10 text-heading-black">
          Reset Your Password{" "}
        </h1>
      </div>
      <form action="">
        <div className="text-left mb-5">
          <label
            htmlFor="password"
            className="block pl-1 text-sm font-medium leading-6 text-charcoal"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password..."
            className="block w-full rounded-md border-0 py-1.5 text-charcoal placeholder:text-sm placeholder:text-slate-grey focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6 pl-4"
          />
        </div>

        <div className="text-left ">
          <label
            htmlFor="confirmPassword"
            className="block pl-1 text-sm font-medium leading-6 text-charcoal"
          >
            Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password..."
            className="block w-full rounded-md border-0 py-1.5 text-charcoal placeholder:text-sm placeholder:text-slate-grey focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6 pl-4"
          />
        </div>

        <div className="mt-6 space-y-3">
          <button className="w-full text-center text-base bg-base-purple text-white py-2.5 rounded-lg transition-all duration-100 hover:text-neutral-50 hover:shadow-md hover:bg-[#714ec5e8]">
            Continue
          </button>
        </div>
      </form>
    </section>
  );
}
