import React from 'react';
import { Button, Card, CardActions, CardContent, Grid2 } from '@mui/material';
import { InputField } from '../shared-elements/input-field/InputField';
import { SelectField } from '../shared-elements/select-field/SelectField';
import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';
import { FinancialDataAsReportedPayload } from '../services/IFinancialData';
import { useAppDispatch } from '../store/hooks';
import { fetchStockAnalysis } from '../slices/stockAnalysisSlice';

export const StockAnalysisFilter = () => {
  const { t } = useTranslation();
  const { handleSubmit } = useFormContext();
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
          <Grid2 size={6}>
            <InputField
              id={'symbol'}
              label={t('enterStock')}
              name={'symbol'}
              variant={'filled'}
              color="error"
            />
          </Grid2>
          <Grid2 size={6}>
            <SelectField list={list} label="Annual" name="freq" />
          </Grid2>
        </Grid2>
        <CardActions sx={{ justifyContent: 'flex-end', padding: '50px' }}>
          <Button
            variant={'contained'}
            color={'secondary'}
            onClick={handleSubmit(searchStock)}
          >
            {t('search')}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
