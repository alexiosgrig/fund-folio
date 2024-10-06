import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CircularProgress, Grid2 } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import { selectStockAnalysisLoading } from '../slices/stockAnalysisSlice';
import { StockAnalysisFilter } from './StockAnalysisFilter';
import { StockAnalysisDisplay } from './StockAnalysisDisplay';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CardContainerShared } from '../shared-elements/CardContainerShared';
import useDocumentTitle from '../hooks/useDocumentTitle';

export const StockAnalysis = () => {
  const { t } = useTranslation();
  const loading = useAppSelector(selectStockAnalysisLoading);
  const validationSchema = Yup.object().shape({
    stock: Yup.string()
      .max(4, t('stockSymbolValidation'))
      .required('Stock is required'),
  });

  const methods = useForm({
    // resolver: yupResolver(validationSchema),
  });

  useDocumentTitle(t('stockAnalysis'));

  return (
    <FormProvider {...methods}>
      <CardContainerShared
        title={t('stockAnalysis')}
        subheader={t('stockAnalysis')}
      >
        <Grid2 container spacing={12}>
          <Grid2 size={12}>
            <StockAnalysisFilter />
          </Grid2>
          <Grid2 size={12} container justifyContent={'center'}>
            {loading ? (
              <CircularProgress color="error" />
            ) : (
              <StockAnalysisDisplay />
            )}
          </Grid2>
        </Grid2>
      </CardContainerShared>
    </FormProvider>
  );
};
