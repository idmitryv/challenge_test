import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { baseUrl } from "../../utils/baseUrl";

import { fetchUser_CreateFailure, fetchUser_CreateSuccess } from "./actions";
import { Fetch_User_Create_REQUEST } from "./actionTypes";
import { FetchUser_CreateRequest, responseUser_Create, requestUser_Create } from "./types";

const fetchUser_CreateData = (body: requestUser_Create): Promise<AxiosResponse<any, any>> => {
  return axios.post<responseUser_Create>(baseUrl + "/createUser", body);
};

function* fetchUser_CreateSaga(action: FetchUser_CreateRequest) {
  try {
    //@ts-ignore
    const response = yield call(fetchUser_CreateData, action.payload)
    console.log("response", response);
    yield put(
      fetchUser_CreateSuccess({
        response: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchUser_CreateFailure({
        response: e.response ? e.response.data : { error: e.message },
      })
    );
  }
}

function* User_CreateSaga() {
  yield all([takeLatest(Fetch_User_Create_REQUEST, fetchUser_CreateSaga)]);
}

export default User_CreateSaga;
