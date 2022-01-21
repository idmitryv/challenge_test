import * as actionTypes from './actionTypes';

export interface requestUser_Password {
  password?: string;
}

export interface responseUser_Password {
  data: any;
  error: string | null | any;
}

export interface User_PasswordState {
  pending: boolean;
  data: any;
  error: string | null;
}

export interface FetchUser_PasswordResponsePayload {
  response: responseUser_Password;
}

export interface FetchUser_PasswordRequest {
  type: typeof actionTypes.Fetch_User_Password_REQUEST;
  payload: requestUser_Password;
}

export type FetchUser_PasswordSuccess = {
  type: typeof actionTypes.Fetch_User_Password_Success;
  payload: FetchUser_PasswordResponsePayload;
};

export type FetchUser_PasswordFailure = {
  type: typeof actionTypes.Fetch_User_Password_Failure;
  payload: FetchUser_PasswordResponsePayload;
};

export type User_PasswordActions =
  | FetchUser_PasswordRequest
  | FetchUser_PasswordSuccess
  | FetchUser_PasswordFailure;
