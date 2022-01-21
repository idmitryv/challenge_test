import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { baseUrl } from "../../utils/baseUrl";

import { fetchUserFailure, fetchUserSuccess } from "./actions";
import { Fetch_User_REQUEST } from "./actionTypes";
import { FetchUserRequest, responseUser, requestUser } from "./types";

const fetchUserData = (body: requestUser): Promise<AxiosResponse<any, any>> => {
  return axios.post<responseUser>(baseUrl + "/signup", body);
};

function* fetchUserSaga(action: FetchUserRequest) {
  try {
    //@ts-ignore
    const response = yield call(fetchUserData, action.payload)
    console.log("response", response);
    yield put(
      fetchUserSuccess({
        response: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchUserFailure({
        response: e.response ? e.response.data : { error: e.message },
      })
    );
  }
}

function* userSaga() {
  yield all([takeLatest(Fetch_User_REQUEST, fetchUserSaga)]);
}

export default userSaga;
