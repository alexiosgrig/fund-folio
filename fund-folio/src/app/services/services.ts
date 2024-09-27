import axios from 'axios';
import {
  FinancialDataAsReportedPayload,
  FinancialDataAsReportedResponse,
} from './IFinancialData';
import {
  IRecommendationsPayload,
  IRecommendationsResponse,
} from './IRecommendations';
import { INewsPayload, INewsResponse } from './INewsData';
import { IMetricsPayload, IMetricsResponse } from './IMetricsData';

export const api = axios.create({
  baseURL: 'https://finnhub.io/api',
});

export const getFinancialAsReportedData = async (
  payload: FinancialDataAsReportedPayload
): Promise<FinancialDataAsReportedResponse[]> => {
  try {
    const response = await api.get('v1/stock/financials-reported', {
      params: {
        ...payload,
        token,
      },
    });
    return response.data.data;
  } catch (err) {
    console.error('Error fetching financial data:', err);
    throw err;
  }
};

export const getRecommendationsData = async (
  payload: IRecommendationsPayload
): Promise<IRecommendationsResponse[]> => {
  try {
    const response = await api.get('/v1/stock/recommendation', {
      params: {
        ...payload,
        token,
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching financial data:', err);
    throw err;
  }
};

export const getNewsData = async (
  payload: INewsPayload
): Promise<INewsResponse[]> => {
  try {
    const response = await api.get('/v1/news', {
      params: {
        ...payload,
        token,
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching financial data:', err);
    throw err;
  }
};

export const getMetricsData = async (
  payload: IMetricsPayload
): Promise<IMetricsResponse> => {
  try {
    const response = await api.get('/v1/stock/metric', {
      params: {
        ...payload,
        token,
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching financial data:', err);
    throw err;
  }
};