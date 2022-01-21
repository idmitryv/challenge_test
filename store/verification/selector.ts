import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.verification.pending;

const getVerificationsData = (state: AppState) => state.verification.data;

const getError = (state: AppState) => state.verification.error;

export const getVerificationDataSelector = createSelector(getVerificationsData, data => data);

export const getVerificationPendingSelector = createSelector(
  getPending,
  pending => pending,
);

export const getVerificationErrorSelector = createSelector(getError, error => error);
