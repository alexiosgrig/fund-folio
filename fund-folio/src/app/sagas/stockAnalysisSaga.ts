import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchStockAnalysis,
  fetchStockAnalysisError,
  fetchStockAnalysisSuccess,
} from '../slices/stockAnalysisSlice';
import {
  FinancialDataAsReportedPayload,
  FinancialDataAsReportedResponse,
} from '../services/IFinancialData';
import { getFinancialAsReportedData } from '../services/services';

function* fetchStockAnalysisAsync(action: {
  payload: FinancialDataAsReportedPayload;
}) {
  try {
    const data: FinancialDataAsReportedResponse = yield call(
      getFinancialAsReportedData,
      action.payload
    );
    yield put(fetchStockAnalysisSuccess(data));
  } catch (error) {
    yield put(fetchStockAnalysisError(error));
    console.error('Increment failed', error);
  }
}

export function* watchStockAnalysis() {
  yield takeEvery(fetchStockAnalysis, fetchStockAnalysisAsync);
}

export default function* rootSaga() {
  yield watchStockAnalysis();
}
