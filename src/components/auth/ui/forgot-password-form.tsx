import React from "react";

export default function ForgotPasswordForm() {
  return (
    <section className="text-center md:w-[360px]">
      <div>
        <h1 className="pb-2 text-2xl font-bold leading-10 text-heading-black">
          Forgot Password{" "}
        </h1>
        <p className="pb-4 text-base font-medium text-slate-grey">
          Enter your email to receive on how to reset your password{" "}
        </p>
      </div>
      <form action="">
        <div className="text-left mb-5">
          <label
            htmlFor="email"
            className="block pl-1 text-sm font-medium leading-6 text-charcoal"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter Your Email..."
              className="block w-full rounded-md border-0 py-1.5 text-charcoal placeholder:text-sm placeholder:text-slate-grey focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6 pl-4"
            />
          </div>
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
