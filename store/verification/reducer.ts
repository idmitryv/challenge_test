import * as actionType from './actionTypes';

import { VerificationActions, VerificationState } from './types';
const initialState: VerificationState = {
  pending: false,
  data: {},
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: VerificationActions): VerificationState => {
  switch (action.type) {
    case actionType.Fetch_Verification_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case actionType.Fetch_Verification_Success:
      return {
        ...state,
        pending: false,
        data: action.payload.response.data,
        error: action.payload.response.error,
      };
    case actionType.Fetch_Verification_Failure:
      return {
        ...state,
        pending: false,
        data: action.payload.response.data || {},
        error: action.payload.response.error,
      };
    default:
      return {
        ...state,
      };
  }
};
