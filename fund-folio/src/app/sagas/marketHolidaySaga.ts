import { call, put, takeEvery } from 'redux-saga/effects';
import { getMarketHolidayData, getMetricsData } from '../services/services';
import { IMetricsPayload, IMetricsResponse } from '../services/IMetricsData';
import { AxiosError } from 'axios';
import {
  fetchMarketHoliday,
  fetchMarketHolidayError,
  fetchMarketHolidaySuccess,
} from '../slices/marketHolidaySlice';
import { IMarketHolidayPayload, IMarketHolidayResponse } from '../services/IMarketHolidayData';

function* fetchMarketHolidayAsync(action: { payload: IMarketHolidayPayload }) {
  try {
    const data: IMarketHolidayResponse = yield call(getMarketHolidayData, action.payload);
    yield put(fetchMarketHolidaySuccess(data));
  } catch (error) {
    const axiosError = error as AxiosError<unknown>;
    yield put(fetchMarketHolidayError(axiosError));
    console.error('Increment failed', error);
  }
}

export function* watchMarketHoliday() {
  yield takeEvery(fetchMarketHoliday, fetchMarketHolidayAsync);
}
