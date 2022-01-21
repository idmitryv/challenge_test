import { combineReducers } from 'redux';
import signupReducer from './signup/reducer';
import verificationReducer from './verification/reducer';
import createUserReducer from './createUser/reducer';
import userPasswordReducer from './userPassword/reducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  verification: verificationReducer,
  user: createUserReducer,
  userPassword: userPasswordReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
