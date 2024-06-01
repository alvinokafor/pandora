import { AuthLayout } from "@/layouts";
import React from "react";
import ForgotPasswordForm from "@/components/auth/ui/forgot-password-form";

export default function ForgotPassword() {
  return (
    <AuthLayout title="Forgot Password?">
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
