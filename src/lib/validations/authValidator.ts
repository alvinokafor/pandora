import { z } from "zod";

export const loginValidator = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(32, { message: "Password must not be more than 32 characters" }),
  remember_me: z.boolean().default(false),
});

export type LoginSchema = z.infer<typeof loginValidator>;

export const signInValidator = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(32, { message: "Password must not be more than 32 characters" }),
});

export type SignInSchema = z.infer<typeof signInValidator>;

export const emailValidator = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
});

export type EmailSchema = z.infer<typeof emailValidator>;

export const resetPasswordValidator = z
  .object({
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(32, { message: "Password must not be more than 32 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ResetPasswordSchema = z.infer<typeof resetPasswordValidator>;

export const verificationCodeValidator = z.object({
  code: z
    .string()
    .length(6, { message: "Verification code must be exactly 6 digits" })
    .regex(/^\d+$/, { message: "Verification code must only contain digits" }),
});

export type VerificationCodeSchema = z.infer<typeof verificationCodeValidator>;
