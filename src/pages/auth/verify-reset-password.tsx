import React from "react";
import { AuthLayout } from "@/layouts";
import VerifyResetPasswordCode from "@/components/auth/ui/verify-reset-password-code";

export default function VerifyResetPassword() {
  return (
    <AuthLayout title="Enter reset code">
      <VerifyResetPasswordCode />
    </AuthLayout>
  );
}
