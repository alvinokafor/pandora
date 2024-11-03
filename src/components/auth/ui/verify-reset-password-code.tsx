"use client";

import React, { useCallback } from "react";
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
import {
  AuthAdapter,
  useAuthMutation,
  useAuthQuery,
} from "@/adapters/AuthAdapter";
import {
  VerificationCodeSchema,
  verificationCodeValidator,
  emailValidator,
  EmailSchema,
} from "@/lib/validations/authValidator";
import { useSearchParams, useRouter } from "next/navigation";
import { LoadingIcon } from "@/assets/icons";

export default function VerifyResetPasswordCode() {
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
  const searchParams = useSearchParams();
  const router = useRouter();
  const session_id = searchParams.get("sessionId");
  const email = searchParams.get("email");
  // console.log(email);

  const { mutateAsync, isPending } = useAuthMutation({
    mutationCallback: AuthAdapter.confirmResetPasswordSession,
  });

  const { data } = useAuthQuery({
    queryKey: ["session_id"],
    queryCallback: AuthAdapter.verifyResetPasswordSession,
    slug: session_id!,
  });

  console.log(data);

  const updateURLWithNewSessionId = useCallback(
    (newSessionId: string) => {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set("sessionId", newSessionId);
      router.replace(currentUrl.toString());
    },
    [router]
  );

  const onSubmit = async (data: VerificationCodeSchema) => {
    // console.log({ ...data, session_id });
    try {
      const res = await mutateAsync({ ...data, session_id });
      console.log(res);
      toast.success("session is confirmed");
      router.push(`/auth/reset-password?sessionId=${session_id}`);
    } catch (error: any) {
      toast.error(error.response.data.message);
      // console.log(error);
    }
  };

  return (
    <section className="text-center md:w-[360px]">
      <div>
        <h1 className="pb-2 text-2xl font-bold leading-10 text-heading-black">
          Verify your email
        </h1>
        <p className="pb-4 text-base font-medium text-slate-grey">
          Input the 6 digit verification code sent to your email{" "}
          {decodeURIComponent(email!)}
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
        {errors.code && (
          <p className="mt-1 text-sm text-red-600">{errors.code.message}</p>
        )}

        <Button
          type="submit"
          className="w-full text-center text-base bg-base-purple text-white py-2.5 rounded-lg transition-all duration-100 hover:text-neutral-50 hover:shadow-md hover:bg-[#714ec5e8]"
          disabled={isPending}
        >
          {isPending ? <LoadingIcon /> : "Continue"}
        </Button>
      </form>
    </section>
  );
}