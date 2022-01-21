import * as actionTypes from './actionTypes';

export interface requestUser {
  id?: number;
  email?: string;
  phone?: string;
}

export interface responseUser {
  data: any;
  error: string | null | any;
}

export interface UserState {
  pending: boolean;
  data: any;
  error: string | null;
}

export interface FetchUserResponsePayload {
  response: responseUser;
}

export interface FetchUserRequest {
  type: typeof actionTypes.Fetch_User_REQUEST;
  payload: requestUser;
}

export type FetchUserSuccess = {
  type: typeof actionTypes.Fetch_User_Success;
  payload: FetchUserResponsePayload;
};

export type FetchUserFailure = {
  type: typeof actionTypes.Fetch_User_Failure;
  payload: FetchUserResponsePayload;
};

export type UserActions =
  | FetchUserRequest
  | FetchUserSuccess
  | FetchUserFailure;
