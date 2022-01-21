import * as actionType from './actionTypes';

import { UserActions, UserState } from './types';
const initialState: UserState = {
  pending: false,
  data: {},
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case actionType.Fetch_User_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case actionType.Fetch_User_Success:
      return {
        ...state,
        pending: false,
        data: action.payload.response.data,
        error: action.payload.response.error,
      };
    case actionType.Fetch_User_Failure:
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
