import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid2,
} from '@mui/material';
import { CardNews } from './CardNews';
import { getNewsData } from '../services/services';
import { INewsPayload, INewsResponse } from '../services/INewsData';
import { SelectField } from '../shared-elements/select-field/SelectField';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const StockNews = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState<INewsResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const categoryList = [
    { value: 'general', label: 'general' },
    { value: 'forex', label: 'forex' },
    { value: 'crypto', label: 'crypto' },
  ];
  const methods = useForm<INewsPayload>();
  const { handleSubmit } = methods;
  const handleSearch = async (payload: INewsPayload) => {
    setLoading(true);
    try {
      const res = await getNewsData(payload);
      setNews(res);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormProvider {...methods}>
      <Card>
        <CardContent>
          <Card>
            <CardContent>
              <SelectField
                list={categoryList}
                label={t('category')}
                name={'category'}
              />
              <CardActions>
                <Button onClick={handleSubmit(handleSearch)}>
                  {t('search')}
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          {loading ? (
            <CircularProgress color="error" />
          ) : (
            <Grid2 container spacing={8}>
              {news.map((item, index) => (
                <Grid2 size={3} key={index}>
                  <CardNews news={item} />
                </Grid2>
              ))}
            </Grid2>
          )}
        </CardContent>
      </Card>
    </FormProvider>
  );
};
