// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from '../slices/metricsSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/metricsSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    metrics: metricsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // Disable default thunk middleware
    }).concat(sagaMiddleware), // Add saga middleware
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
