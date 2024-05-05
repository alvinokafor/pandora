import React from "react";
import { AuthLayout } from "@/layouts";
import ResetPasswordForm from "@/components/auth/ui/reset-password-form";

export default function ResetPassword() {
  return (
    <AuthLayout title="Reset Password">
      <ResetPasswordForm />
    </AuthLayout>
  );
}
