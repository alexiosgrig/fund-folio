import React from 'react';
import { IMetricsPayload } from '../services/IMetricsData';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Button } from '@mui/material';
import {
  fetchMetrics,
  selectMetricsData,
  selectMetricsLoading,
} from '../slices/metricsSlice';

export const Metrics = () => {

  const dispatch = useAppDispatch();
  const metricsData = useAppSelector(selectMetricsData);
  const metricsLoading = useAppSelector(selectMetricsLoading);

  console.log(metricsData, metricsLoading, 'metricsData');

  const searchMetrics = async (payload: IMetricsPayload) => {
    dispatch(fetchMetrics(payload));
  };

  return (
    <Button onClick={() => searchMetrics({ symbol: 'AAPL' })}>EEFEFEFEF</Button>
  );
};
