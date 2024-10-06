import React from 'react';
import { Button, Card, CardActions, CardContent, Grid2 } from '@mui/material';
import { SelectField } from '../shared-elements/select-field/SelectField';
import { useFormContext } from 'react-hook-form';
import { INewsPayload } from '../services/INewsData';
import { fetchNews } from '../slices/newsSlice';
import { useAppDispatch } from '../store/hooks';
import { useTranslation } from 'react-i18next';

export const StockNewsFilters = () => {
  const { t } = useTranslation();
  const { handleSubmit } = useFormContext<INewsPayload>();
  const dispatch = useAppDispatch();

  const categoryList = [
    { value: 'general', label: t('general') },
    { value: 'forex', label: t('forex') },
    { value: 'crypto', label: t('crypto') },
  ];

  const handleSearch = async (payload: INewsPayload) => {
    dispatch(fetchNews(payload));
  };

  return (
    <Card>
      <CardContent>
        <Grid2 container spacing={12}>
          <Grid2 size={{ sm: 6, xs: 12, md: 6 }}>
            <SelectField
              list={categoryList}
              label={t('category')}
              name={'category'}
            />
          </Grid2>
          <Grid2 size={12}>
            <CardActions>
              <Button
                onClick={handleSubmit(handleSearch)}
                variant="contained"
                color="primary"
              >
                {t('search')}
              </Button>
            </CardActions>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};
