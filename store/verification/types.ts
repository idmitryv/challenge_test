import * as actionTypes from './actionTypes';

export interface requestVerification {
  id?: number;
  code?: string;
}

export interface responseVerification {
  data: any;
  error: string | null | any;
}

export interface VerificationState {
  pending: boolean;
  data: any;
  error: string | null;
}

export interface FetchVerificationResponsePayload {
  response: responseVerification;
}

export interface FetchVerificationRequest {
  type: typeof actionTypes.Fetch_Verification_REQUEST;
  payload: requestVerification;
}

export type FetchVerificationSuccess = {
  type: typeof actionTypes.Fetch_Verification_Success;
  payload: FetchVerificationResponsePayload;
};

export type FetchVerificationFailure = {
  type: typeof actionTypes.Fetch_Verification_Failure;
  payload: FetchVerificationResponsePayload;
};

export type VerificationActions =
  | FetchVerificationRequest
  | FetchVerificationSuccess
  | FetchVerificationFailure;
