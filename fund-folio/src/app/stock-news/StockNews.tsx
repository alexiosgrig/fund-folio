import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid2,
} from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../store/hooks';
import {
  clearNewsData,
} from '../slices/newsSlice';
import { INewsPayload } from '../services/INewsData';
import { StockNewsFilters } from './StockNewsFilters';
import { CardNewsDisplay } from './CardNewsDisplay';

export const StockNews = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const methods = useForm<INewsPayload>();

  useEffect(() => {
    return () => {
      dispatch(clearNewsData());
    };
  }, [dispatch]);

  return (
    <FormProvider {...methods}>
      <Card sx={{ padding: '50px' }}>
        <CardHeader title={t('stockNews')} />
        <CardContent>
          <Grid2 container spacing={12}>
            <Grid2 size={12}>
              <StockNewsFilters />
            </Grid2>
            <Grid2 size={12}>
              <CardNewsDisplay />
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </FormProvider>
  );
};
