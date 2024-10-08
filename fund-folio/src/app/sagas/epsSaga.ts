import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { fetchEps, fetchEpsError, fetchEpsSuccess } from '../slices/epsSlice';
import { IEpsPayload, IEpsResponse } from '../services/IEps';
import { getEpsData } from '../services/services';

function* fetchEpsAsync(action: { payload: IEpsPayload }) {
  try {
    const data: IEpsResponse = yield call(getEpsData, action.payload);
    yield put(fetchEpsSuccess(data));
  } catch (error) {
    const axiosError = error as AxiosError<IEpsResponse>;
    yield put(fetchEpsError(axiosError));
    console.error('Fetch failed', error);
  }
}

export function* watchEps() {
  yield takeEvery(fetchEps, fetchEpsAsync);
}
