import React from "react";
import { AuthLayout } from "@/layouts";
import LoginForm from "@/components/auth/ui/login-form";

export default function Login() {
  return (
    <AuthLayout title="Login - Pandora">
      <LoginForm />
    </AuthLayout>
  );
}
