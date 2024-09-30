import { all, fork } from 'redux-saga/effects';
import { watchMetrics } from './metricsSaga';
import { watchStockAnalysis } from './stockAnalysisSaga';
import { watchNews } from './newsSaga';
import { watchRecommendations } from './recommendationsSaga';

export default function* rootSaga() {
  yield all([
    fork(watchMetrics),
    fork(watchStockAnalysis),
    fork(watchNews),
    fork(watchRecommendations),
  ]);
}
