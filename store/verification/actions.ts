import * as actionType from './actionTypes';
import {
  FetchVerificationResponsePayload,
  FetchVerificationRequest,
  FetchVerificationSuccess,
  FetchVerificationFailure,
  requestVerification,
} from './types';

export const fetchVerificationRequest = (data: requestVerification): FetchVerificationRequest => ({
  type: actionType.Fetch_Verification_REQUEST,
  payload: data,
});

export const fetchVerificationSuccess = (
  payload: FetchVerificationResponsePayload,
): FetchVerificationSuccess => ({
  type: actionType.Fetch_Verification_Success,
  payload,
});

export const fetchVerificationFailure = (
  payload: FetchVerificationResponsePayload,
): FetchVerificationFailure => ({
  type: actionType.Fetch_Verification_Failure,
  payload,
});
