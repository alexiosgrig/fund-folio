import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid2,
  Snackbar,
} from '@mui/material';
import { useAppSelector } from '../store/hooks';
import {
  selectStockAnalysisError,
  selectStockAnalysisLoading,
} from '../slices/stockAnalysisSlice';
import { StockAnalysisFilter } from './StockAnalysisFilter';
import { StockAnalysisDisplay } from './StockAnalysisDisplay';

export const StockAnalysis = () => {
  const { t } = useTranslation();
  const loading = useAppSelector(selectStockAnalysisLoading);
  const error = useAppSelector(selectStockAnalysisError);
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
      </Card>
      <Snackbar open={!!error?.message} autoHideDuration={1}>
        <Alert severity="error" variant="filled" sx={{ width: '100%' }}>
          {error?.message}
        </Alert>
      </Snackbar>
    </FormProvider>
  );
};
