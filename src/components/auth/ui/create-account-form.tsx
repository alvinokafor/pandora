import React from "react";
import { GoogleColorIcon, FacebookLogo } from "@/assets/icons";

export default function CreateAccountForm() {
  return (
    <section className="text-center md:w-[360px] -mt-4">
      <div>
        <h1 className="text-2xl font-bold leading-10 text-heading-black">
          Create an account{" "}
        </h1>
        <p className="pb-4 text-base font-medium text-slate-grey">
          Start your 30-day free trial.{" "}
        </p>
      </div>
      <form action="">
        <div className="text-left mb-4">
          <label
            htmlFor="email"
            className="block pl-1 text-sm font-medium leading-6 text-charcoal"
          >
            Email
          </label>
          <div className="">
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

        <div className="text-left ">
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

        <div className="flex justify-end mt-2">
          <p className="text-sm text-primary-shade">Forgot Password?</p>
        </div>

        <div className="mt-5 space-y-2">
          <button className="w-full text-center text-base bg-base-purple text-white py-2.5 rounded-lg  transition-all duration-100 hover:text-neutral-50 hover:shadow-md hover:bg-[#714ec5e8]">
            Get started{" "}
          </button>
          <p>OR</p>
          <button className="flex gap-x-2 text-charcoal items-center justify-center text-sm border rounded-lg border-french-gray py-2.5 text-center w-full">
            <GoogleColorIcon />
            Sign up with Google
          </button>
          <button className="flex gap-x-2 text-charcoal items-center justify-center text-sm border rounded-lg border-french-gray py-2.5 text-center w-full">
            <FacebookLogo />
            Sign up with Facebook
          </button>
        </div>
      </form>

      <div className="mt-6">
        <p className="text-slate-gray text-sm">
          Don't have an account?{" "}
          <span className="text-sm text-primary-shade">Sign Up</span>
        </p>
      </div>
    </section>
  );
}
