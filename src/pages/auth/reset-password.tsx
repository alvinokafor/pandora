import React from "react";
import { AppLayout, AuthPagesLayout } from "@/layouts";
import ResetPasswordForm from "@/components/auth/ui/reset-password-form";

export default function ResetPassword() {
  return (
    <AppLayout title="Reset Password">
      <AuthPagesLayout>
        <ResetPasswordForm />
      </AuthPagesLayout>
    </AppLayout>
  );
}
