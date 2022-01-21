import * as actionType from './actionTypes';
import {
  FetchUser_PasswordResponsePayload,
  FetchUser_PasswordRequest,
  FetchUser_PasswordSuccess,
  FetchUser_PasswordFailure,
  requestUser_Password,
} from './types';

export const fetchUser_PasswordRequest = (data: requestUser_Password): FetchUser_PasswordRequest => ({
  type: actionType.Fetch_User_Password_REQUEST,
  payload: data,
});

export const fetchUser_PasswordSuccess = (
  payload: FetchUser_PasswordResponsePayload,
): FetchUser_PasswordSuccess => ({
  type: actionType.Fetch_User_Password_Success,
  payload,
});

export const fetchUser_PasswordFailure = (
  payload: FetchUser_PasswordResponsePayload,
): FetchUser_PasswordFailure => ({
  type: actionType.Fetch_User_Password_Failure,
  payload,
});
