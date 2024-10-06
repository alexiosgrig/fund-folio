import React, { useEffect } from 'react';
import { Grid2 } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../store/hooks';
import { clearNewsData } from '../slices/newsSlice';
import { INewsPayload } from '../services/INewsData';
import { StockNewsFilters } from './StockNewsFilters';
import { CardNewsDisplay } from './CardNewsDisplay';
import { CardContainerShared } from '../shared-elements/CardContainerShared';

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
      <CardContainerShared title={t('stockNews')} subheader={t('stockNews')}>
        <Grid2 container spacing={12}>
          <Grid2 size={12}>
            <StockNewsFilters />
          </Grid2>
          <Grid2 size={12}>
            <CardNewsDisplay />
          </Grid2>
        </Grid2>
      </CardContainerShared>
    </FormProvider>
  );
};
