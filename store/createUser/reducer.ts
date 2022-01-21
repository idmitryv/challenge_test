import * as actionType from './actionTypes';

import { User_CreateActions, User_CreateState } from './types';
const initialState: User_CreateState = {
  pending: false,
  data: {},
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: User_CreateActions): User_CreateState => {
  switch (action.type) {
    case actionType.Fetch_User_Create_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case actionType.Fetch_User_Create_Success:
      return {
        ...state,
        pending: false,
        data: action.payload.response.data,
        error: action.payload.response.error,
      };
    case actionType.Fetch_User_Create_Failure:
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
