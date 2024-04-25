import { AppLayout, AuthPagesLayout } from "@/layouts";
import React from "react";
import CreateAccountForm from "@/components/auth/ui/create-account-form";

export default function CreateAccount() {
  return (
    <AppLayout title="Create Account">
      <AuthPagesLayout>
        <CreateAccountForm />
      </AuthPagesLayout>
    </AppLayout>
  );
}
