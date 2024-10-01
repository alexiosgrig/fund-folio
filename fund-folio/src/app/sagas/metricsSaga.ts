import { call, put, takeEvery } from 'redux-saga/effects';
import { getMetricsData } from '../services/services';
import {
  fetchMetrics,
  fetchMetricsError,
  fetchMetricsSuccess,
} from '../slices/metricsSlice';
import { IMetricsPayload, IMetricsResponse } from '../services/IMetricsData';
import { AxiosError } from 'axios';

function* fetchMetricsAsync(action: { payload: IMetricsPayload }) {
  try {
    const data: IMetricsResponse = yield call(getMetricsData, action.payload);
    yield put(fetchMetricsSuccess(data));
  } catch (error) {
    const axiosError = error as AxiosError<IMetricsResponse>;
    yield put(fetchMetricsError(axiosError));
    console.error('Increment failed', error);
  }
}

export function* watchMetrics() {
  yield takeEvery(fetchMetrics, fetchMetricsAsync);
}
