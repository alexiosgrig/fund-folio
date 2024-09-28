import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMetricsPayload, IMetricsResponse } from '../services/IMetricsData';
import { RootState } from '../store/store';
import { AxiosError } from 'axios';

interface MetricsState {
  metricsData: IMetricsResponse | undefined;
  error: AxiosError;
  loading: boolean;
}

const initialState: MetricsState = {
  metricsData: undefined,
  error: {} as AxiosError,
  loading: false,
};

export const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    fetchMetrics: (state, action: PayloadAction<IMetricsPayload>) => {
      state.loading = true;
    },
    fetchMetricsSuccess: (state, action: PayloadAction<IMetricsResponse>) => {
      state.metricsData = action.payload;
      state.loading = false;
    },
    fetchMetricsError: (state, action: PayloadAction<AxiosError>) => {
      state.error = action.payload;
    },
  },
});
export const selectMetricsState = (state: RootState): MetricsState =>
  state.metrics;

export const selectMetricsData = (
  state: RootState
): IMetricsResponse | undefined => state.metrics.metricsData;

export const selectMetricsLoading = (state: RootState): boolean =>
  state.metrics.loading;

export const selectMetricsError = (state: RootState): AxiosError =>
  state.metrics.error;
export const { fetchMetrics, fetchMetricsSuccess, fetchMetricsError } =
  metricsSlice.actions;

export default metricsSlice.reducer;
