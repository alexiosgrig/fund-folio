import { call, put, takeEvery } from 'redux-saga/effects';
import {  getRecommendationsData } from '../services/services';
import { IMetricsResponse } from '../services/IMetricsData';
import { AxiosError } from 'axios';
import { fetchRecommendations, fetchRecommendationsError, fetchRecommendationsSuccess } from '../slices/recommendationsSlice';
import { IRecommendationsPayload, IRecommendationsResponse } from '../services/IRecommendations';

function* fetchRecommendationsAsync(action: { payload: IRecommendationsPayload }) {
  try {
    console.log(action.payload,'dwwwwwww')
    const data: IRecommendationsResponse[] = yield call(getRecommendationsData, action.payload);
    console.log(data,'dwwwwwww')
    yield put(fetchRecommendationsSuccess(data));
  } catch (error) {
    const axiosError = error as AxiosError<IMetricsResponse>;
    yield put(fetchRecommendationsError(axiosError));
    console.error('Increment failed', error);
  }
}

export function* watchRecommendations() {
  yield takeEvery(fetchRecommendations, fetchRecommendationsAsync);
}
