import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { AxiosError } from 'axios';
import {
  IMarketHolidayPayload,
  IMarketHolidayResponse,
} from '../services/IMarketHolidayData';

interface MarketHolidayState {
  marketHolidayData: IMarketHolidayResponse | undefined;
  error: AxiosError;
}

const initialState: MarketHolidayState = {
  marketHolidayData: undefined,
  error: {} as AxiosError,
};

export const marketHolidaySlice = createSlice({
  name: 'marketHoliday',
  initialState,
  reducers: {
    fetchMarketHoliday: (
      state,
      action: PayloadAction<IMarketHolidayPayload>
    ) => {},
    fetchMarketHolidaySuccess: (
      state,
      action: PayloadAction<IMarketHolidayResponse>
    ) => {
      state.marketHolidayData = action.payload;
    },
    fetchMarketHolidayError: (state, action: PayloadAction<AxiosError>) => {
      state.error = action.payload;
    },
    clearMarketHolidayData: (state, action: PayloadAction<unknown>) => {
      state.marketHolidayData = undefined;
    },
  },
});
export const selectMetricsState = (state: RootState): MarketHolidayState =>
  state.marketHoliday;

export const selectMarketHolidayData = (
  state: RootState
): IMarketHolidayResponse | undefined => state.marketHoliday.marketHolidayData;

export const selectMarketHolidayError = (state: RootState): AxiosError =>
  state.marketHoliday.error;
export const {
  fetchMarketHoliday,
  fetchMarketHolidaySuccess,
  fetchMarketHolidayError,
  clearMarketHolidayData,
} = marketHolidaySlice.actions;

export default marketHolidaySlice.reducer;
