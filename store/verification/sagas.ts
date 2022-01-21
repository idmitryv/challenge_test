import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { baseUrl } from "../../utils/baseUrl";

import { fetchVerificationFailure, fetchVerificationSuccess } from "./actions";
import { Fetch_Verification_REQUEST } from "./actionTypes";
import { FetchVerificationRequest, responseVerification, requestVerification } from "./types";

const fetchVerificationData = (body: requestVerification): Promise<AxiosResponse<any, any>> => {
  return axios.post<responseVerification>(baseUrl + "/verify", body);
};

function* fetchVerificationSaga(action: FetchVerificationRequest) {
  try {
    //@ts-ignore
    const response = yield call(fetchVerificationData, action.payload)
    console.log("response", response.data);
    yield put(
      fetchVerificationSuccess({
        response: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchVerificationFailure({
        response: e.response ? e.response.data : { error: e.message },
      })
    );
  }
}

function* VerificationSaga() {
  yield all([takeLatest(Fetch_Verification_REQUEST, fetchVerificationSaga)]);
}

export default VerificationSaga;
