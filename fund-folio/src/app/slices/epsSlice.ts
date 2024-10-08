import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { AxiosError } from 'axios';
import { IEpsPayload, IEpsResponse } from '../services/IEps';

interface EpsState {
  epsData: IEpsResponse | undefined;
  error: AxiosError;
  loading: boolean;
}

const initialState: EpsState = {
  epsData: undefined,
  error: {} as AxiosError,
  loading: false,
};

export const epsSlice = createSlice({
  name: 'eps',
  initialState,
  reducers: {
    fetchEps: (state, action: PayloadAction<IEpsPayload>) => {
      state.loading = true;
    },
    fetchEpsSuccess: (state, action: PayloadAction<IEpsResponse>) => {
      state.epsData = action.payload;
      state.loading = false;
    },
    fetchEpsError: (state, action: PayloadAction<AxiosError>) => {
      state.error = action.payload;
    },
    clearEpsData: (state) => {
      state.epsData = undefined;
    },
  },
});
export const selectEpsState = (state: RootState): EpsState =>
  state.eps;

export const selectEpsData = (
  state: RootState
): IEpsResponse | undefined => state.eps.epsData;

export const selectEpsLoading = (state: RootState): boolean =>
  state.eps.loading;

export const selectEpsError = (state: RootState): AxiosError =>
  state.eps.error;
export const { fetchEps, fetchEpsSuccess, fetchEpsError, clearEpsData } =
  epsSlice.actions;

export default epsSlice.reducer;
