import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, Grid2 } from '@mui/material';
import { ChartsShared } from '../shared-elements/charts/ChartsShared';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  clearRecommendationsData,
  selectRecommendationsData,
  selectRecommendationsLoading,
} from '../slices/recommendationsSlice';
import { handleRecommendationsData } from './recommendationsUtils';
import { RecommendationsFilter } from './RecommendationsFilter';

export const Recommendations = () => {
  const dispatch = useAppDispatch();

  const recommendationsData = useAppSelector(selectRecommendationsData);
  const loading = useAppSelector(selectRecommendationsLoading);
  const series = handleRecommendationsData(recommendationsData);

  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    stock: Yup.string()
      .max(4, t('stockSymbolValidation')) 
      .required('Stock is required'),
  });
  
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    return () => {
      dispatch(clearRecommendationsData());
    };
  }, [dispatch]);

  return (
    <FormProvider {...methods}>
      <Card sx={{ padding: '50px' }}>
        <CardHeader
          title={t('analystsRecommendations')}
          subheader={t('providedByFinnhub')}
        />
        <CardContent>
          <Grid2 container spacing={12}>
            <Grid2 size={12}>
              <RecommendationsFilter />
            </Grid2>
            <Grid2 size={12}>
              <ChartsShared series={series} loading={loading} />
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </FormProvider>
  );
};
