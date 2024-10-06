import React from 'react';
import { IMetricsPayload } from '../services/IMetricsData';
import { useAppDispatch } from '../store/hooks';
import { Button, Grid2 } from '@mui/material';
import {
  fetchMetrics,
} from '../slices/metricsSlice';
import { CardContainerShared } from '../shared-elements/CardContainerShared';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';

export const Metrics = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const searchMetrics = async (payload: IMetricsPayload) => {
    dispatch(fetchMetrics(payload));
  };

  useDocumentTitle(t('metrics'))

  return (
    <CardContainerShared title={t('metrics')} subheader={t('metrics')}>
      <Grid2 container spacing={12}>
        <Grid2 size={12}>
          <CardContainerShared>
            <Button onClick={() => searchMetrics({ symbol: 'AAPL' })}>
              EEFEFEFEF
            </Button>
          </CardContainerShared>
        </Grid2>
        <Grid2 size={12}>
          <CardContainerShared>
          <Button onClick={() => searchMetrics({ symbol: 'AAPL' })}>
              EEFEFEFEF
            </Button>
          </CardContainerShared>
        </Grid2>
      </Grid2>
    </CardContainerShared>
  );
};
