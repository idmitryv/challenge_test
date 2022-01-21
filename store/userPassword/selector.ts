import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.userPassword.pending;

const getUser_PasswordsData = (state: AppState) => state.userPassword.data;

const getError = (state: AppState) => state.userPassword.error;

export const getUserPasswordDataSelector = createSelector(getUser_PasswordsData, data => data);

export const getUserPasswordPendingSelector = createSelector(
  getPending,
  pending => pending,
);

export const getUserPasswordErrorSelector = createSelector(getError, error => error);
