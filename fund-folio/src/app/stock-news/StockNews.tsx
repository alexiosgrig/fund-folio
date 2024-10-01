import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid2,
} from '@mui/material';
import { CardNews } from './CardNews';
import { SelectField } from '../shared-elements/select-field/SelectField';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  fetchNews,
  selectNewsData,
  selectNewsLoading,
} from '../slices/newsSlice';
import { INewsPayload } from '../services/INewsData';

export const StockNews = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const newsData = useAppSelector(selectNewsData);
  const loading = useAppSelector(selectNewsLoading);

  const categoryList = [
    { value: 'general', label: 'general' },
    { value: 'forex', label: 'forex' },
    { value: 'crypto', label: 'crypto' },
  ];

  const methods = useForm<INewsPayload>();
  const { handleSubmit } = methods;
  const handleSearch = async (payload: INewsPayload) => {
    dispatch(fetchNews(payload));
  };

  return (
    <FormProvider {...methods}>
      <Card sx={{ padding: '50px' }}>
        <CardHeader title={t('stockNews')} />
        <CardContent>
          <Grid2 container spacing={12}>
            <Grid2 size={12}>
              <Card>
                <CardContent>
                  <Grid2 container spacing={12}>
                    <Grid2 size={6}>
                      <SelectField
                        list={categoryList}
                        label={t('category')}
                        name={'category'}
                      />
                    </Grid2>
                    <CardActions
                      sx={{ justifyContent: 'flex-end', padding: '50px' }}
                    >
                      <Button
                        onClick={handleSubmit(handleSearch)}
                        variant="contained"
                        color="primary"
                      >
                        {t('search')}
                      </Button>
                    </CardActions>
                  </Grid2>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 size={12}>
              {loading ? (
                <CircularProgress color="error" />
              ) : (
                <Grid2 container spacing={8}>
                  {newsData?.map((item, index) => (
                    <Grid2 size={3} key={index}>
                      <CardNews news={item} />
                    </Grid2>
                  ))}
                </Grid2>
              )}
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </FormProvider>
  );
};
