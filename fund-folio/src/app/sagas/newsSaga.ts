import { call, put, takeEvery } from 'redux-saga/effects';
import { getNewsData } from '../services/services';
import { IMetricsResponse } from '../services/IMetricsData';
import { AxiosError } from 'axios';
import {
  fetchNews,
  fetchNewsError,
  fetchNewsSuccess,
} from '../slices/newsSlice';
import { INewsPayload, INewsResponse } from '../services/INewsData';

function* fetchNewsAsync(action: { payload: INewsPayload }) {
  try {
    const data: INewsResponse = yield call(getNewsData, action.payload);
    yield put(fetchNewsSuccess(data));
  } catch (error) {
    const axiosError = error as AxiosError<IMetricsResponse>;
    yield put(fetchNewsError(axiosError));
    console.error('Increment failed', error);
  }
}

export function* watchNews() {
  yield takeEvery(fetchNews, fetchNewsAsync);
}

export default function* rootSaga() {
  yield watchNews();
}
