import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid2,
} from '@mui/material';
import { useAppSelector } from '../store/hooks';
import {
  selectStockAnalysisLoading,
} from '../slices/stockAnalysisSlice';
import { StockAnalysisFilter } from './StockAnalysisFilter';
import { StockAnalysisDisplay } from './StockAnalysisDisplay';
import { SnackbarShared } from '../shared-elements/SnackbarShared';

export const StockAnalysis = () => {
  const { t } = useTranslation();
  const loading = useAppSelector(selectStockAnalysisLoading);
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Card sx={{ padding: '50px' }}>
        <CardHeader title={t('stockAnalysis')} />
        <CardContent>
          <Grid2
            spacing={12}
            container
            alignContent={'center'}
            alignItems={'center'}
            alignSelf={'center'}
          >
            <Grid2 size={12}>
              <StockAnalysisFilter />
            </Grid2>
            <Grid2 size={12}>
              {loading ? (
                <CircularProgress color="error" />
              ) : (
                <StockAnalysisDisplay />
              )}
            </Grid2>
          </Grid2>
        </CardContent>
        <SnackbarShared />
      </Card>
    </FormProvider>
  );
};
