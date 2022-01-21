import * as actionType from './actionTypes';
import {
  FetchUserResponsePayload,
  FetchUserRequest,
  FetchUserSuccess,
  FetchUserFailure,
  requestUser,
} from './types';

export const fetchUserRequest = (data: requestUser): FetchUserRequest => ({
  type: actionType.Fetch_User_REQUEST,
  payload: data,
});

export const fetchUserSuccess = (
  payload: FetchUserResponsePayload,
): FetchUserSuccess => ({
  type: actionType.Fetch_User_Success,
  payload,
});

export const fetchUserFailure = (
  payload: FetchUserResponsePayload,
): FetchUserFailure => ({
  type: actionType.Fetch_User_Failure,
  payload,
});
