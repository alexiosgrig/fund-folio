import React, { useEffect } from 'react';
import { CircularProgress, Grid2 } from '@mui/material';
import { ChartsShared } from '../shared-elements/charts/ChartsShared';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CardContainerShared } from '../shared-elements/CardContainerShared';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { EarningsPerShareFilter } from './EarningPerShareFilter';
import { clearEpsData, selectEpsData, selectEpsLoading } from '../slices/epsSlice';
import { handleDataMapping } from '../utils/dataMappingUtils';

export const EarningsPerShare = () => {
  const dispatch = useAppDispatch();

  const epsData = useAppSelector(selectEpsData);
  const loading = useAppSelector(selectEpsLoading);

  const categories = [
    { key: 'actual', label: 'Actual', stack: '1' },
    { key: 'estimate', label: 'Estimate', stack: '2' },
  ];

  const series = handleDataMapping(epsData, categories)

  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    symbol: Yup.string()
      .max(4, t('stockSymbolValidation'))
      .required('Stock is required'),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    return () => {
      dispatch(clearEpsData());
    };
  }, [dispatch]);

  useDocumentTitle(t('eps'));

  return (
    <FormProvider {...methods}>
      <CardContainerShared
        title={t('eps')}
        subheader={t('eps')}
      >
        <Grid2 container spacing={12}>
          <Grid2 size={12}>
            <EarningsPerShareFilter />
          </Grid2>
          <Grid2 size={12} container justifyContent={'center'}>
            <>
              {loading ? (
                <CircularProgress color="error" />
              ) : (
                <ChartsShared series={series} data={[t('eps')]}/>
              )}
            </>
          </Grid2>
        </Grid2>
      </CardContainerShared>
    </FormProvider>
  );
};
