import { AppLayout, AuthPagesLayout } from "@/layouts";
import React from "react";
import ForgotPasswordForm from "@/components/auth/ui/forgot-password-form";

export default function ForgotPassword() {
  return (
    <AppLayout title="Forgot Password?">
      <AuthPagesLayout>
        <ForgotPasswordForm />
      </AuthPagesLayout>
    </AppLayout>
  );
}
