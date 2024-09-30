import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { AxiosError } from 'axios';
import {
  IRecommendationsPayload,
  IRecommendationsResponse,
} from '../services/IRecommendations';

interface RecommendationsState {
  recommendationsData: IRecommendationsResponse[] | undefined;
  error: AxiosError;
  loading: boolean;
}

const initialState: RecommendationsState = {
  recommendationsData: undefined,
  error: {} as AxiosError,
  loading: false,
};

export const recommendationsSlice = createSlice({
  name: 'recommendations',
  initialState,
  reducers: {
    fetchRecommendations: (
      state,
      action: PayloadAction<IRecommendationsPayload>
    ) => {
      state.loading = true;
    },
    fetchRecommendationsSuccess: (
      state,
      action: PayloadAction<IRecommendationsResponse[]>
    ) => {
      state.recommendationsData = action.payload;
      state.loading = false;
    },
    fetchRecommendationsError: (state, action: PayloadAction<AxiosError>) => {
      state.error = action.payload;
    },
    clearRecommendationsData: (state) => {
        state.recommendationsData = undefined;
      },
  },
});
export const selectRecommendationsState = (
  state: RootState
): RecommendationsState => state.recommendations;

export const selectRecommendationsData = (
  state: RootState
): IRecommendationsResponse[] | undefined =>
  state.recommendations.recommendationsData;

export const selectRecommendationsLoading = (state: RootState): boolean =>
  state.recommendations.loading;

export const selectRecommendationsError = (state: RootState): AxiosError =>
  state.recommendations.error;
export const {
  fetchRecommendations,
  fetchRecommendationsSuccess,
  fetchRecommendationsError,
  clearRecommendationsData
} = recommendationsSlice.actions;

export default recommendationsSlice.reducer;
