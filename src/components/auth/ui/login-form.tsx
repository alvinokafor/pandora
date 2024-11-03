"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { GoogleColorIcon, LoadingIcon } from "@/assets/icons";
import { AuthAdapter, useAuthMutation } from "@/adapters/AuthAdapter";
import { loginValidator, LoginSchema } from "@/lib/validations/authValidator";
import { useObfuscationToggle } from "@/hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/router";

export default function LoginForm() {
  const [InputType, Icon, setVisible] = useObfuscationToggle();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    setValue,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginValidator),
    defaultValues: {
      remember_me: false,
    },
  });

  // console.log(errors);

  const { mutateAsync, isPending } = useAuthMutation({
    mutationCallback: AuthAdapter.loginUser,
  });

  const onSubmit = async (data: LoginSchema) => {
    // console.log(data);
    try {
      const res = await mutateAsync(data);
      // console.log(res);
      toast.success("Login Successful");
      router.push("/");
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <section className="text-center md:w-[360px]">
      <div>
        <h1 className="pb-2 text-2xl font-bold leading-10 text-heading-black">
          Log in to your account
        </h1>
        <p className="pb-4 text-base font-medium text-slate-grey">
          Welcome back! Please enter your details.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-left mb-5">
          <Label
            htmlFor="email"
            className="block pl-1 text-sm font-medium leading-6 text-charcoal"
          >
            Email
          </Label>
          <div className="mt-2">
            <Input
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

        <div className="text-left mb-5">
          <Label
            htmlFor="password"
            className="block pl-1 text-sm font-medium leading-6 text-charcoal"
          >
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={InputType}
              placeholder="Enter Your Password..."
              className="block w-full rounded-md border-0 py-1.5 text-charcoal placeholder:text-sm placeholder:text-slate-grey focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6 pl-4"
              {...register("password")}
            />
            <div
              className="absolute top-[20%] right-4 pt-1"
              onClick={() => setVisible((visible) => !visible)}
            >
              {Icon}
            </div>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember_me"
              {...register("remember_me")}
              onCheckedChange={(checked) => {
                if (typeof checked === "boolean") {
                  setValue("remember_me", checked);
                }
              }}
            />
            <Label htmlFor="remember_me" className="text-sm text-charcoal">
              Remember me
            </Label>
          </div>
          <Link href="/auth/forgot-password">
            <p className="text-sm text-primary-shade">Forgot Password?</p>
          </Link>
        </div>

        <div className="mt-6 space-y-3">
          <Button
            type="submit"
            disabled={isPending}
            className="w-full text-center text-base bg-base-purple text-white py-2.5 rounded-lg transition-all duration-100 hover:text-neutral-50 hover:shadow-md hover:bg-[#714ec5e8]"
          >
            {isPending ? <LoadingIcon /> : "Sign In"}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="flex gap-x-2 text-charcoal items-center justify-center text-sm border rounded-lg border-french-gray py-2.5 text-center w-full"
          >
            <GoogleColorIcon />
            Sign in with Google
          </Button>
        </div>
      </form>

      <div className="mt-8">
        <p className="text-slate-gray text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/auth/create-account">
            <span className="text-sm text-primary-shade">Sign Up</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
