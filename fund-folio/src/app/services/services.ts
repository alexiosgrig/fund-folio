import { environment } from './../enviroment';
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
import { IMarketHolidayPayload, IMarketHolidayResponse } from './IMarketHolidayData';
import { IEpsPayload, IEpsResponse } from './IEps';

const { token, apiUrl } = environment;

export const api = axios.create({
  baseURL: apiUrl,
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
        symbol: payload,
        token,
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching recommendations data:', err);
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
    console.error('Error fetching news data:', err);
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
    console.error('Error fetching metrics data:', err);
    throw err;
  }
};

export const getMarketHolidayData = async (
  payload: IMarketHolidayPayload
): Promise<IMarketHolidayResponse> => {
  try {
    const response = await api.get('/v1/stock/market-holiday', {
      params: {
        exchange : payload.exchange,
        token,
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching holiday data:', err);
    throw err;
  }
};

export const getEpsData = async (
  payload: IEpsPayload
): Promise<IEpsResponse> => {
  try {
    const response = await api.get('/v1/stock/earnings', {
      params: {
        symbol : payload.symbol,
        token,
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching eps data:', err);
    throw err;
  }
};
