import React from "react";
import { AuthLayout } from "@/layouts";
import VerifyEmailForm from "@/components/auth/ui/verify-email-form";

export default function VerifyEmail() {
  return (
    <AuthLayout title="Verify your Email">
      <VerifyEmailForm />
    </AuthLayout>
  );
}
