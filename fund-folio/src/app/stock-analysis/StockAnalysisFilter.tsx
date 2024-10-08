import React from 'react';
import { Button, Card, CardActions, CardContent, Grid2 } from '@mui/material';
import { InputField } from '../shared-elements/input-field/InputField';
import { SelectField } from '../shared-elements/select-field/SelectField';
import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';
import { FinancialDataAsReportedPayload } from '../services/IFinancialData';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchStockAnalysis, selectStockAnalysisLoading } from '../slices/stockAnalysisSlice';

export const StockAnalysisFilter = () => {
  const loading = useAppSelector(selectStockAnalysisLoading);
  const { t } = useTranslation();
  const { handleSubmit, formState } = useFormContext();
  const dispatch = useAppDispatch();

  const list = [
    { value: 'annual', label: 'Annual' },
    { value: 'quarterly', label: 'Quarterly' },
  ];

  const searchStock = async (payload: FinancialDataAsReportedPayload) => {
    dispatch(fetchStockAnalysis(payload));
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
          <Grid2 size={{ md: 6, xs: 12 }}>
            <SelectField list={list} label="Annual" name="freq" />
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
