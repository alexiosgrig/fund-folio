import React, { useEffect } from 'react';
import { CircularProgress, Grid2 } from '@mui/material';
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
import { RecommendationsFilter } from './RecommendationsFilter';
import { CardContainerShared } from '../shared-elements/CardContainerShared';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { handleDataMapping } from '../utils/dataMappingUtils';

export const Recommendations = () => {
  const dispatch = useAppDispatch();

  const recommendationsData = useAppSelector(selectRecommendationsData);
  const loading = useAppSelector(selectRecommendationsLoading);

  const categories = [
    { key: 'strongBuy', label: 'Strong Buy', stack: '1' },
    { key: 'buy', label: 'Buy', stack: '2' },
    { key: 'hold', label: 'Hold', stack: '3' },
    { key: 'sell', label: 'Sell', stack: '4' },
    { key: 'strongSell', label: 'Strong Sell', stack: '5' },
  ];

  const series = handleDataMapping(recommendationsData, categories);

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
            <>
              {loading ? (
                <CircularProgress color="error" />
              ) : (
                <ChartsShared series={series} data={[t('recommendations')]} />
              )}
            </>
          </Grid2>
        </Grid2>
      </CardContainerShared>
    </FormProvider>
  );
};
