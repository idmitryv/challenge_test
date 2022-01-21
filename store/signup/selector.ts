import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.user.pending;

const getUsersData = (state: AppState) => state.user.data;

const getError = (state: AppState) => state.user.error;

export const getUserDataSelector = createSelector(getUsersData, data => data);

export const getUserPendingSelector = createSelector(
  getPending,
  pending => pending,
);

export const getUserErrorSelector = createSelector(getError, error => error);
