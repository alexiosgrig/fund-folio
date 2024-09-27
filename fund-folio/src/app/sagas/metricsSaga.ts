// src/features/counterSaga.ts
import { call, put, takeEvery } from 'redux-saga/effects';
import { getMetricsData } from '../services/services';
import {
  fetchMetrics,
  fetchMetricsError,
  fetchMetricsSuccess,
} from '../slices/metricsSlice';
import { IMetricsPayload, IMetricsResponse } from '../services/IMetricsData';

function* fetchMetricsAsync(action: { payload: IMetricsPayload }) {
  try {
    const data: IMetricsResponse = yield call(getMetricsData, action.payload);
    yield put(fetchMetricsSuccess(data));
  } catch (error) {
    yield put(fetchMetricsError(error));
    console.error('Increment failed', error);
  }
}

function* watchMetrics()  {
  yield takeEvery(fetchMetrics, fetchMetricsAsync);
}

// Export root saga
export default function* rootSaga()  {
  yield watchMetrics();
}
