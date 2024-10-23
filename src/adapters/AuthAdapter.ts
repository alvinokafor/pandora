import { MutationCallBackArgs } from "./types/AdapterTypes";
import ApiService from "./ApiService";
import { IUser } from "@/lib/types/User";
import { tanstackWrapper } from "./utils/TanstackWrapper";
import { useTanstackMutation, useTanstackQuery } from "./utils/TanstackWrapper";
import {
  IUserLogin,
  IUserRegister,
  IVerOTP,
  IMessageRes,
} from "./types/UserTypes";

//api service initializer
const authService = new ApiService("auth");
const useAuthMutation = useTanstackMutation;
const useAuthQuery = useTanstackQuery;

// const AuthAdapter = {
//     loginUser: async ({payload,}: MutationCallBackArgs<IUserLogin>)
// }

// const AuthAdapter = {
//     googleSignOn: async ({
//       payload,
//     }: MutationCallBackArgs<IUserLogin>): Promise<IUser> => {
//       const response = await authService.mutate<IUserLogin, IUser>({
//         slug: "sign-on",
//         payload,
//         type: "JSON",
//         method: "POST",
//       });
//       return response.data;
//     },
//   };

const AuthAdapter = {
  loginUser: async ({
    payload,
  }: MutationCallBackArgs<IUserLogin>): Promise<IUser> => {
    const res = await authService.mutate<IUserLogin, IUser>({
      slug: "login",
      payload,
      type: "JSON",
      method: "POST",
    });
    return res.data;
  },

  registerUser: async ({
    payload,
  }: MutationCallBackArgs<IUserRegister>): Promise<IUser> => {
    const res = await authService.mutate<IUserRegister, IUser>({
      slug: "signup",
      payload,
      type: "JSON",
      method: "POST",
    });
    return res.data;
  },

  //   logoutUser: async (): Promise<IMessageRes> => {
  //     const res = await authService.mutate<{}, IMessageRes>({
  //       slug: "logout",
  //       {},
  //       type: "JSON",
  //       method: "POST",
  //     });
  //     return res.data;
  //   },

  resendVerificationOTP: async ({
    payload,
  }: MutationCallBackArgs<IVerOTP>): Promise<IMessageRes> => {
    const res = await authService.mutate<IVerOTP, IMessageRes>({
      slug: "signup/resend-otp/",
      payload,
      type: "JSON",
      method: "POST",
    });
    return res.data;
  },
};
