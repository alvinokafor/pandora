"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

type FormValues = {
  code: string;
};

export default function VerifyEmailForm() {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data); // This will log the submitted code
    // Add your form submission logic here
  };

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-10 justify-center items-center mt-6"
      >
        <Controller
          name="code"
          control={control}
          rules={{ required: true, minLength: 4, maxLength: 4 }}
          render={({ field }) => (
            <InputOTP
              maxLength={4}
              value={field.value}
              onChange={(value) => field.onChange(value)}
            >
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
          )}
        />

        <Button
          type="submit"
          className="w-full text-center text-base bg-base-purple text-white py-2.5 rounded-lg transition-all duration-100 hover:text-neutral-50 hover:shadow-md hover:bg-[#714ec5e8]"
        >
          Continue
        </Button>
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
