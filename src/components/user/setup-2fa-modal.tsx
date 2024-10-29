import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

export default function Setup2faModal() {
  return (
    <Dialog>
      <DialogTrigger asChild className="bg-gray-200">
        <Switch />
        {/* <p>Hello</p> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-semibold text-3xl">
            Set up two factor authentication
          </DialogTitle>
          <DialogDescription>
            Input the 4 digit verification code sent to your email
            alvin2k99@gmail.com
          </DialogDescription>
        </DialogHeader>

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

          <button className="w-full text-center text-base bg-base-purple text-white py-2.5 rounded-lg transition-all duration-100 hover:text-neutral-50 hover:shadow-md hover:bg-[#714ec5e8]">
            Continue
          </button>
        </form>

        <DialogFooter>
          <div className="flex gap-x-2">
            <DialogClose asChild>
              <button
                type="button"
                className="basis-1/2 border rounded-lg py-2.5 text-charcoal font-medium"
              >
                Cancel
              </button>
            </DialogClose>

            <button
              type="submit"
              className="basis-1/2 border rounded-lg py-2.5 text-white bg-base-purple"
            >
              Submit
            </button>
          </div>

          <div className="mt-8">
            <p className="text-slate-gray text-sm flex gap-x-2 justify-center">
              Resend code in
              <span className="text-sm text-primary-shade">02:00</span>
            </p>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
