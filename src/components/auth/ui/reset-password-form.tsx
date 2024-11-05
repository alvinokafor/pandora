import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { AuthAdapter, useAuthMutation } from "@/adapters/AuthAdapter";
import {
  resetPasswordValidator,
  ResetPasswordSchema,
} from "@/lib/validations/authValidator";
import { useSearchParams, useRouter } from "next/navigation";
import { useObfuscationToggle } from "@/hooks";
import { Input } from "@/components/ui/input";
import { LoadingIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { getErrorMessage } from "@/utils";

export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordValidator),
  });
  const [InputType, Icon, setVisible] = useObfuscationToggle();

  const searchParams = useSearchParams();
  const router = useRouter();
  const session_id = searchParams.get("sessionId");

  const { mutateAsync, isPending } = useAuthMutation({
    mutationCallback: AuthAdapter.resetPassword,
  });

  const onSubmit = async (data: ResetPasswordSchema) => {
    console.log(data);
    try {
      const res = await mutateAsync({
        password: data.password,
        session_id,
      });
      console.log(res);
      toast.success("Password reset Successful");
      router.push("/auth/login");
    } catch (error) {
      // toast.error("Something went wrong. Please try again");
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <section className="text-center md:w-[360px]">
      <div>
        <h1 className="pb-8 text-2xl font-bold leading-10 text-heading-black">
          Reset Your Password{" "}
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-left mb-5 relative ">
          <label
            htmlFor="password"
            className="block pl-1 text-sm font-medium leading-6 text-charcoal"
          >
            Password
          </label>
          <input
            id="password"
            type={InputType}
            placeholder="Enter Your Password..."
            className="block w-full rounded-md border-0 py-1.5 text-charcoal placeholder:text-sm placeholder:text-slate-grey focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6 pl-4"
            {...register("password")}
          />
          <div
            className="absolute top-[50%] right-4 pt-1"
            onClick={() => setVisible((visible) => !visible)}
          >
            {Icon}
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="text-left mb-5 relative ">
          <label
            htmlFor="confirmPassword"
            className="block pl-1 text-sm font-medium leading-6 text-charcoal"
          >
            Confirm Password
          </label>
          <Input
            type={InputType}
            id="confirmPassword"
            placeholder="Confirm Password..."
            className="block w-full rounded-md border-0 py-1.5 text-charcoal placeholder:text-sm placeholder:text-slate-grey focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6 pl-4"
            {...register("confirmPassword")}
          />
          <div
            className="absolute top-[50%] right-4 pt-1"
            onClick={() => setVisible((visible) => !visible)}
          >
            {Icon}
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="mt-6 space-y-3">
          <Button
            className="w-full text-center text-base bg-base-purple text-white py-2.5 rounded-lg transition-all duration-100 hover:text-neutral-50 hover:shadow-md hover:bg-[#714ec5e8]"
            type="submit"
            disabled={isPending}
          >
            {isPending ? <LoadingIcon /> : "Continue"}
          </Button>
        </div>
      </form>
    </section>
  );
}
