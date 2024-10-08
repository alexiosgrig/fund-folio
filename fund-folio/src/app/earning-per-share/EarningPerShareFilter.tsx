import React from 'react';
import { Button, Card, CardActions, CardContent, Grid2 } from '@mui/material';
import { InputField } from '../shared-elements/input-field/InputField';
import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchEps, selectEpsLoading } from '../slices/epsSlice';
import { IEpsPayload } from '../services/IEps';

export const EarningsPerShareFilter = () => {
  const loading = useAppSelector(selectEpsLoading);
  const { t } = useTranslation();
  const { handleSubmit, formState } = useFormContext();
  const dispatch = useAppDispatch();

  const searchStock = async (payload: IEpsPayload) => {
    dispatch(fetchEps(payload));
  };

  return (
    <Card>
      <CardContent>
        <Grid2 container spacing={12}>
          <Grid2 size={{ md: 6, xs: 12 }}>
            <InputField
              id={'symbol'}
              label={t('enterStock')}
              name={'symbol'}
              variant={'filled'}
              color="error"
              errors={formState.errors?.stock?.message}
            />
          </Grid2>
          <Grid2 size={12}>
            <CardActions>
              <Button
                variant={'contained'}
                color={'primary'}
                onClick={handleSubmit(searchStock)}
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
