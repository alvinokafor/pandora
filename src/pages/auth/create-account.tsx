import { AuthLayout } from "@/layouts";
import React from "react";
import CreateAccountForm from "@/components/auth/ui/create-account-form";

export default function CreateAccount() {
  return (
    <AuthLayout title="Create Account">
      <CreateAccountForm />
    </AuthLayout>
  );
}
