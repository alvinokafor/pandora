import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function VerifyEmailForm() {
  return (
    <section className="text-center md:w-[360px]">
      <div>
        <h1 className="pb-2 text-2xl font-bold leading-10 text-heading-black">
          Verify your email
        </h1>
        <p className="pb-4 text-base font-medium text-slate-grey">
          Input the 4 digit verification code sent to your email
          alvin2k99@gmail.com{" "}
        </p>
      </div>
      <form className="flex flex-col gap-y-10 justify-center items-center mt-6">
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>

        <button className="w-full text-center text-base bg-base-purple text-white py-2.5 rounded-lg">
          Continue
        </button>
      </form>

      <div className="mt-8">
        <p className="text-slate-gray text-sm flex gap-x-2 justify-center">
          Resend code in
          <span className="text-sm text-primary-shade">02:00</span>
        </p>
      </div>
    </section>
  );
}
