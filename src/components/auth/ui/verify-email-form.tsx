"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthAdapter, useAuthMutation } from "@/adapters/AuthAdapter";
import {
  VerificationCodeSchema,
  verificationCodeValidator,
} from "@/lib/validations/authValidator";

type FormValues = {
  code: string;
};

export default function VerifyEmailForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VerificationCodeSchema>({
    resolver: zodResolver(verificationCodeValidator),
    defaultValues: {
      code: "",
    },
  });

  const { mutateAsync, isPending } = useAuthMutation({
    mutationCallback: AuthAdapter.verifyUserEmail,
  });

  const session_id: string = "abcdefghijklmnopqrstuvwxyz";

  const onSubmit = async (data: VerificationCodeSchema) => {
    console.log({ ...data, session_id });
    try {
      const res = await mutateAsync({ ...data, session_id });
      console.log(res);
      toast.success("Email Verification Successful");
    } catch (error) {
      toast.error("Something went wrong. Please try again");
    }
  };

  return (
    <section className="text-center md:w-[360px]">
      <div>
        <h1 className="pb-2 text-2xl font-bold leading-10 text-heading-black">
          Verify your email
        </h1>
        <p className="pb-4 text-base font-medium text-slate-grey">
          Input the 6 digit verification code sent to your email
          alvin2k99@gmail.com
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-10 justify-center items-center mt-6"
      >
        <Controller
          name="code"
          control={control}
          rules={{ required: true, minLength: 6, maxLength: 6 }}
          render={({ field }) => (
            <InputOTP
              maxLength={6}
              value={field.value}
              onChange={(value) => field.onChange(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          )}
        />

        <Button
          type="submit"
          className="w-full text-center text-base bg-base-purple text-white py-2.5 rounded-lg transition-all duration-100 hover:text-neutral-50 hover:shadow-md hover:bg-[#714ec5e8]"
          disabled={isPending}
        >
          {isPending ? "Please wait..." : "Continue"}
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
