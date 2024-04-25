import React from "react";
import { AppLayout, AuthPagesLayout } from "@/layouts";
import LoginForm from "@/components/auth/ui/login-form";

export default function Login() {
  return (
    <AppLayout title="Login - Pandora">
      <AuthPagesLayout>
        <LoginForm />
      </AuthPagesLayout>
    </AppLayout>
  );
}
