export type IUserLogin = {
  email: string;
  password: string;
  remember_me: boolean;
};

export type IUserRegister = {
  email: string;
  password: string;
};

export type IVerOTP = {
  email: string;
};

export type IMessageRes = {
  message: string;
};
