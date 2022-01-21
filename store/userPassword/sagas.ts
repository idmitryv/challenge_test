import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { baseUrl } from "../../utils/baseUrl";

import { fetchUser_PasswordFailure, fetchUser_PasswordSuccess } from "./actions";
import { Fetch_User_Password_REQUEST } from "./actionTypes";
import { FetchUser_PasswordRequest, responseUser_Password, requestUser_Password } from "./types";

const fetchUser_PasswordData = (body: requestUser_Password): Promise<AxiosResponse<any, any>> => {
  return axios.post<responseUser_Password>(baseUrl + "/userPassword", body);
};

function* fetchUser_PasswordSaga(action: FetchUser_PasswordRequest) {
  try {
    //@ts-ignore
    const response = yield call(fetchUser_PasswordData, action.payload)
    console.log("response", response);
    yield put(
      fetchUser_PasswordSuccess({
        response: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchUser_PasswordFailure({
        response: e.response ? e.response.data : { error: e.message },
      })
    );
  }
}

function* User_PasswordSaga() {
  yield all([takeLatest(Fetch_User_Password_REQUEST, fetchUser_PasswordSaga)]);
}

export default User_PasswordSaga;
