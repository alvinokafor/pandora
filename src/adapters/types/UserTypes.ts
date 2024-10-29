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

export type IVerifyEmail = {
  session_id: string | null;
  code: string;
};

export type IUserResponse = {
  message: string;
  data: {
    user: {
      email: string;
      first_name: string;
      last_name: string;
    };
    token: string;
  };
};

export type ISessionIdData = {
  message: string;
  data: {
    session_id: string;
  };
};

export type IResetPassword = {
  session_id: string;
  password: string;
};
