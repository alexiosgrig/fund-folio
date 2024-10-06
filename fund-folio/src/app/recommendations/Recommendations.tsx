import React, { useEffect } from 'react';
import { Grid2 } from '@mui/material';
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
import { CardContainerShared } from '../shared-elements/CardContainerShared';
import useDocumentTitle from '../hooks/useDocumentTitle';

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

  useDocumentTitle(t('recommendations'));

  return (
    <FormProvider {...methods}>
      <CardContainerShared
        title={t('analystsRecommendations')}
        subheader={t('providedByFinnhub')}
      >
        <Grid2 container spacing={12}>
          <Grid2 size={12}>
            <RecommendationsFilter />
          </Grid2>
          <Grid2 size={12} container justifyContent={'center'}>
            <CardContainerShared>
              <ChartsShared series={series} loading={loading} />
            </CardContainerShared>
          </Grid2>
        </Grid2>
      </CardContainerShared>
    </FormProvider>
  );
};
