import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.user.pending;

const getUser_CreatesData = (state: AppState) => state.user.data;

const getError = (state: AppState) => state.user.error;

export const getUserCreateDataSelector = createSelector(getUser_CreatesData, data => data);

export const getUserCreatePendingSelector = createSelector(
  getPending,
  pending => pending,
);

export const getUserCreateErrorSelector = createSelector(getError, error => error);
