import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid2,
} from '@mui/material';
import React, { useState } from 'react';
import {
  ChartsShared,
  IRecommendationMapData,
} from '../shared-elements/charts/ChartsShared';
import { InputField } from '../shared-elements/input-field/InputField';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { getRecommendationsData } from '../services/services';
import { useTranslation } from 'react-i18next';

export const Recommendations = () => {
  const [series, setSeries] = useState<IRecommendationMapData[] | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    stock: Yup.string()
      .length(4, t('stockSymbolValidation'))
      .required('Stock is required'),
  });
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const getRecommendations = async (event) => {
    const symbol = event?.stock;
    if (symbol) {
      setLoading(true);
      try {
        const response = await getRecommendationsData({ symbol });
        if (response && response.length > 0) {
          const strongBuyData = [];
          const buyData = [];
          const holdData = [];
          const sellData = [];
          const strongSell = [];

          for (const data of response) {
            strongBuyData.push(data.strongBuy);
            buyData.push(data.buy);
            holdData.push(data.hold);
            sellData.push(data.sell);
            strongSell.push(data.strongSell);
          }

          const newRecommendationsArray: IRecommendationMapData[] = [
            {
              data: strongBuyData,
              stack: '1',
              label: 'Strong Buy',
            },
            { data: buyData, stack: '2', label: 'Buy' },
            { data: holdData, stack: '3', label: 'Hold' },
            { data: sellData, stack: '4', label: 'Sell' },
            {
              data: strongSell,
              stack: '5',
              label: 'Strong Sell',
            },
          ];
          setSeries(newRecommendationsArray);
          setLoading(false);
        } else {
          console.warn('No data available');
        }
      } catch (err) {
        setLoading(true);
        console.warn('Error fetching recommendations:', err);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <Card>
        <CardHeader title={t('analystsRecommendations')} subheader={t('providedByFinnhub')}/>
        <CardContent>
          <Grid2
            container
            spacing={12}
            justifyContent="center"
            alignItems="center"
          >
            <Grid2 size={6}>
              <InputField
                label={t('enterStock')}
                id={'stock'}
                name={'stock'}
                variant="outlined"
                color={'info'}
                errors={errors?.stock?.message}
              />
            </Grid2>
            <Grid2 size={6}>
              <Button
                onClick={handleSubmit(getRecommendations)}
                variant="contained"
                color="primary"
              >
                {t('search')}
              </Button>
            </Grid2>
            <ChartsShared series={series} loading={loading} />
          </Grid2>
        </CardContent>
      </Card>
    </FormProvider>
  );
};
