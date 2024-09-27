import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { AxiosError } from 'axios';
import { INewsPayload, INewsResponse } from '../services/INewsData';

interface NewsState {
  newsData: INewsResponse[] | undefined;
  error: AxiosError;
  loading: boolean;
}

const initialState: NewsState = {
  newsData: undefined,
  error: {} as AxiosError,
  loading: false,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    fetchNews: (state, action: PayloadAction<INewsPayload>) => {
      state.loading = true;
    },
    fetchNewsSuccess: (state, action: PayloadAction<INewsResponse[]>) => {
      state.newsData = action.payload;
      state.loading = false;
    },
    fetchNewsError: (state, action: PayloadAction<AxiosError>) => {
      state.error = action.payload;
    },
  },
});
export const selectNewsState = (state: RootState): NewsState => state.news;

export const selectNewsData = (state: RootState): INewsResponse[] | undefined =>
  state.news.newsData;

export const selectNewsLoading = (state: RootState): boolean =>
  state.news.loading;

export const selectNewsError = (state: RootState): AxiosError =>
  state.news.error;
export const { fetchNews, fetchNewsSuccess, fetchNewsError } =
  newsSlice.actions;

export default newsSlice.reducer;
