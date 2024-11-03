import { MutationCallBackArgs } from "./types/AdapterTypes";
import ApiService from "./ApiService";
import TanstackWrapper from "./utils/TanstackWrapper";
import {
  IUserLogin,
  IUserRegister,
  IVerOTP,
  IMessageRes,
  IUserResponse,
  IVerifyEmail,
  ISessionIdData,
  IResetPassword,
} from "./types/UserTypes";

//api service initializer
const authService = new ApiService("auth");
const useAuthMutation = TanstackWrapper.mutation;
const useAuthQuery = TanstackWrapper.query;

const AuthAdapter = {
  loginUser: async ({
    payload,
  }: MutationCallBackArgs<IUserLogin>): Promise<IUserResponse> => {
    const res = await authService.mutate<IUserLogin, IUserResponse>({
      slug: "login/",
      payload,
      type: "JSON",
      method: "POST",
    });
    return res.data;
  },

  registerUser: async ({
    payload,
  }: MutationCallBackArgs<IUserRegister>): Promise<ISessionIdData> => {
    const res = await authService.mutate<IUserRegister, ISessionIdData>({
      slug: "signup/",
      payload,
      type: "JSON",
      method: "POST",
    });
    return res.data;
  },

  logoutUser: async ({
    payload,
  }: MutationCallBackArgs<{}>): Promise<IMessageRes> => {
    const res = await authService.mutate<{}, IMessageRes>({
      slug: "logout/",
      payload,
      type: "JSON",
      method: "POST",
    });
    return res.data;
  },

  resendVerificationOTP: async ({
    payload,
  }: MutationCallBackArgs<IVerOTP>): Promise<ISessionIdData> => {
    const res = await authService.mutate<IVerOTP, ISessionIdData>({
      slug: "signup/resend-otp/",
      payload,
      type: "JSON",
      method: "POST",
    });
    return res.data;
  },

  verifyUserEmail: async ({
    payload,
  }: MutationCallBackArgs<IVerifyEmail>): Promise<IMessageRes> => {
    const res = await authService.mutate<IVerifyEmail, IMessageRes>({
      slug: "signup/verify/",
      payload,
      type: "JSON",
      method: "POST",
    });
    return res.data;
  },

  forgotPassword: async ({
    payload,
  }: MutationCallBackArgs<IVerOTP>): Promise<ISessionIdData> => {
    const res = await authService.mutate<IVerOTP, ISessionIdData>({
      slug: "forgot-password/",
      payload,
      type: "JSON",
      method: "POST",
    });
    return res.data;
  },

  confirmResetPasswordSession: async ({
    payload,
  }: MutationCallBackArgs<IVerifyEmail>): Promise<IMessageRes> => {
    const res = await authService.mutate<IVerifyEmail, IMessageRes>({
      slug: "reset-password/verify/",
      payload,
      type: "JSON",
      method: "POST",
    });
    return res.data;
  },

  resetPassword: async ({
    payload,
  }: MutationCallBackArgs<IResetPassword>): Promise<IMessageRes> => {
    const res = await authService.mutate<IResetPassword, IMessageRes>({
      slug: "reset-password/",
      payload,
      type: "JSON",
      method: "POST",
    });
    return res.data;
  },

  verifyResetPasswordSession: async (
    params: string | undefined
  ): Promise<IMessageRes> => {
    const res = await authService.fetch<IMessageRes>(
      `/reset-password/verify/?session_id=${params}`
    );

    return res;
  },
};

export { AuthAdapter, useAuthMutation, useAuthQuery };
