import React from "react";
import { AppLayout, AuthPagesLayout } from "@/layouts";
import VerifyEmailForm from "@/components/auth/ui/verify-email-form";

export default function VerifyEmail() {
  return (
    <AppLayout title="Verify your Email">
      <AuthPagesLayout>
        <VerifyEmailForm />
      </AuthPagesLayout>
    </AppLayout>
  );
}
