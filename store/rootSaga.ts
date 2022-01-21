import { all, fork } from 'redux-saga/effects';
import userSaga from './signup/sagas';
import verificationSaga from './verification/sagas';
import createUserSaga from './createUser/sagas';
import userPasswordSaga from './userPassword/sagas';

export default function* rootSaga() {
  yield all([fork(userSaga)]);
  yield all([fork(verificationSaga)]);
  yield all([fork(createUserSaga)]);
  yield all([fork(userPasswordSaga)]);
}
