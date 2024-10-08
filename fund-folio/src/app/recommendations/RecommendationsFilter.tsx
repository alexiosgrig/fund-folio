import React from 'react';
import { Button, Card, CardActions, CardContent, Grid2 } from '@mui/material';
import { InputField } from '../shared-elements/input-field/InputField';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchRecommendations, selectRecommendationsLoading } from '../slices/recommendationsSlice';

export const RecommendationsFilter = () => {
  const dispatch = useAppDispatch();

  const { handleSubmit, formState } = useFormContext();
  const { t } = useTranslation();
  const loading = useAppSelector(selectRecommendationsLoading);

  const getRecommendations = async (event) => {
    const symbol = event?.stock;
    if (symbol) {
      try {
        dispatch(fetchRecommendations(symbol));
      } catch (err) {
        console.warn('Error fetching recommendations:', err);
      }
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid2 container spacing={12}>
          <Grid2 size={{ xs: 8, sm: 6, md: 6 }}>
            <InputField
              label={t('enterStock')}
              id={'stock'}
              name={'stock'}
              variant="outlined"
              color={'info'}
              errors={formState.errors?.stock?.message}
            />
          </Grid2>
          <Grid2 size={12}>
            <CardActions>
              <Button
                onClick={handleSubmit(getRecommendations)}
                variant="contained"
                color="primary"
                disabled={loading}
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
