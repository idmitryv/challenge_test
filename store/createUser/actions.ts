import * as actionType from './actionTypes';
import {
  FetchUser_CreateResponsePayload,
  FetchUser_CreateRequest,
  FetchUser_CreateSuccess,
  FetchUser_CreateFailure,
  requestUser_Create,
} from './types';

export const fetchUser_CreateRequest = (data: requestUser_Create): FetchUser_CreateRequest => ({
  type: actionType.Fetch_User_Create_REQUEST,
  payload: data,
});

export const fetchUser_CreateSuccess = (
  payload: FetchUser_CreateResponsePayload,
): FetchUser_CreateSuccess => ({
  type: actionType.Fetch_User_Create_Success,
  payload,
});

export const fetchUser_CreateFailure = (
  payload: FetchUser_CreateResponsePayload,
): FetchUser_CreateFailure => ({
  type: actionType.Fetch_User_Create_Failure,
  payload,
});
