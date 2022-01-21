import * as actionType from './actionTypes';

import { User_PasswordActions, User_PasswordState } from './types';
const initialState: User_PasswordState = {
  pending: false,
  data: {},
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: User_PasswordActions): User_PasswordState => {
  switch (action.type) {
    case actionType.Fetch_User_Password_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case actionType.Fetch_User_Password_Success:
      return {
        ...state,
        pending: false,
        data: action.payload.response.data,
        error: action.payload.response.error,
      };
    case actionType.Fetch_User_Password_Failure:
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
