import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import {
  FinancialDataAsReportedPayload,
  FinancialDataAsReportedResponse,
} from '../services/IFinancialData';
import { AxiosError } from 'axios';

interface StockAnalysisState {
  stockAnalysisData: FinancialDataAsReportedResponse | undefined;
  error: AxiosError;
  loading: boolean;
}

const initialState: StockAnalysisState = {
  stockAnalysisData: undefined,
  error: {} as AxiosError,
  loading: false,
};

export const stockAnalysisSlice = createSlice({
  name: 'stockAnalysis',
  initialState,
  reducers: {
    fetchStockAnalysis: (
      state,
      action: PayloadAction<FinancialDataAsReportedPayload>
    ) => {
      state.loading = true;
    },
    fetchStockAnalysisSuccess: (
      state,
      action: PayloadAction<FinancialDataAsReportedResponse>
    ) => {
      state.stockAnalysisData = action.payload;
      state.loading = false;
    },
    fetchStockAnalysisError: (state, action: PayloadAction<AxiosError>) => {
      state.error = action.payload;
    },
  },
});
export const selectMetricsState = (state: RootState): StockAnalysisState =>
  state.stockAnalysis;

export const selectStockAnalysis = (
  state: RootState
): FinancialDataAsReportedResponse | undefined =>
  state.stockAnalysis.stockAnalysisData;

export const selectStockAnalysisLoading = (state: RootState): boolean =>
  state.stockAnalysis.loading;

export const selectStockAnalysisError = (state: RootState): AxiosError =>
  state.stockAnalysis.error;
export const {
  fetchStockAnalysis,
  fetchStockAnalysisSuccess,
  fetchStockAnalysisError,
} = stockAnalysisSlice.actions;

export default stockAnalysisSlice.reducer;
