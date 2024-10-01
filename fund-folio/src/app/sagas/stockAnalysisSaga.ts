import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchStockAnalysis,
  fetchStockAnalysisSuccess,
} from '../slices/stockAnalysisSlice';
import {
  FinancialDataAsReportedPayload,
  FinancialDataAsReportedResponse,
} from '../services/IFinancialData';
import { getFinancialAsReportedData } from '../services/services';
import { fetchNotifications } from '../slices/notificationsSlice';
import { AxiosError } from 'axios';

function* fetchStockAnalysisAsync(action: {
  payload: FinancialDataAsReportedPayload;
}) {
  try {
    const data: FinancialDataAsReportedResponse[] = yield call(
      getFinancialAsReportedData,
      action.payload
    );
    console.log(data);
    yield put(fetchStockAnalysisSuccess(data));
    if (!data.length) {
      const notifications = {
        severity: 'error',
        message: 'Data is empty, check is stock ticket is correct',
      };
      yield put(fetchNotifications(notifications));
    }
  } catch (error) {
    const errorResponse: AxiosError = error as AxiosError;
    const notifications = {
      severity: 'error',
      message: errorResponse?.response?.data.error,
    };
    yield put(fetchNotifications(notifications));
    console.error('Increment failed', error);
  }
}

export function* watchStockAnalysis() {
  yield takeEvery(fetchStockAnalysis, fetchStockAnalysisAsync);
}
