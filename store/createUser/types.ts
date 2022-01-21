import * as actionTypes from './actionTypes';

export interface requestUser_Create {
  name?: string;
  accountID?: string;
}

export interface responseUser_Create {
  data: any;
  error: string | null | any;
}

export interface User_CreateState {
  pending: boolean;
  data: any;
  error: string | null;
}

export interface FetchUser_CreateResponsePayload {
  response: responseUser_Create;
}

export interface FetchUser_CreateRequest {
  type: typeof actionTypes.Fetch_User_Create_REQUEST;
  payload: requestUser_Create;
}

export type FetchUser_CreateSuccess = {
  type: typeof actionTypes.Fetch_User_Create_Success;
  payload: FetchUser_CreateResponsePayload;
};

export type FetchUser_CreateFailure = {
  type: typeof actionTypes.Fetch_User_Create_Failure;
  payload: FetchUser_CreateResponsePayload;
};

export type User_CreateActions =
  | FetchUser_CreateRequest
  | FetchUser_CreateSuccess
  | FetchUser_CreateFailure;
