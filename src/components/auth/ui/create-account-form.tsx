import React from "react";
import { GoogleColorIcon, FacebookLogo, LoadingIcon } from "@/assets/icons";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useObfuscationToggle } from "@/hooks";
import { AuthAdapter, useAuthMutation } from "@/adapters/AuthAdapter";
import { signInValidator, SignInSchema } from "@/lib/validations/authValidator";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function CreateAccountForm() {
  const [InputType, Icon, setVisible] = useObfuscationToggle();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInValidator),
  });

  const email = watch("email");

  const { mutateAsync, isPending } = useAuthMutation({
    mutationCallback: AuthAdapter.registerUser,
  });

  const onSubmit = async (data: SignInSchema) => {
    // console.log(data);
    try {
      const res = await mutateAsync(data);
      // console.log(res);
      toast.success("Sign Up Successful");
      router.push(
        `/auth/verify-email?sessionId=${res.data.session_id}&email=${email}`
      );
    } catch (error) {
      toast.error("Something went wrong. Please try again");
    }
  };

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

      <form onSubmit={handleSubmit(onSubmit)}>
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
              type="email"
              autoComplete="email"
              placeholder="Enter Your Email..."
              className="block w-full rounded-md border-0 py-1.5 text-charcoal placeholder:text-sm placeholder:text-slate-grey focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6 pl-4"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="text-left relative">
          <label
            htmlFor="password"
            className="block pl-1 text-sm font-medium leading-6 text-charcoal"
          >
            Password
          </label>
          <input
            type={InputType}
            id="password"
            placeholder="Enter Your Password..."
            className="block w-full rounded-md border-0 py-1.5 text-charcoal placeholder:text-sm placeholder:text-slate-grey focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6 pl-4"
            {...register("password")}
          />
          <div
            className="absolute top-[45%] right-4 pt-1"
            onClick={() => setVisible((visible) => !visible)}
          >
            {Icon}
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mt-5 space-y-2">
          <Button
            className="w-full text-center text-base bg-base-purple text-white py-2.5 rounded-lg  transition-all duration-100 hover:text-neutral-50 hover:shadow-md hover:bg-[#714ec5e8]"
            type="submit"
            disabled={isPending}
          >
            {isPending ? <LoadingIcon /> : "Get Started"}
          </Button>
          <p>OR</p>
          <Button className="flex gap-x-2 text-charcoal items-center justify-center text-sm border rounded-lg border-french-gray py-2.5 text-center w-full">
            <GoogleColorIcon />
            Sign up with Google
          </Button>
          <Button className="flex gap-x-2 text-charcoal items-center justify-center text-sm border rounded-lg border-french-gray py-2.5 text-center w-full">
            <FacebookLogo />
            Sign up with Facebook
          </Button>
        </div>
      </form>

      <div className="mt-6">
        <p className="text-slate-gray text-sm">
          Already have an account?{" "}
          <Link href="/auth/login">
            <span className="text-sm text-primary-shade">Log In</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
