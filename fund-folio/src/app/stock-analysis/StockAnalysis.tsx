import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { InputField } from '../shared-elements/input-field/InputField';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid2,
  Snackbar,
} from '@mui/material';
import { getFinancialAsReportedData } from '../services/services';
import { FinancialDataAsReportedPayload } from '../services/IFinancialData';
import { SelectField } from '../shared-elements/select-field/SelectField';
import { StockAnalysisPaper } from './StockAnalysisPaper';

export const StockAnalysis = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const methods = useForm();

  const statementList = [
    { label: t('freeCashFlow'), statement: 'fc' },
    { label: t('incomeStatement'), statement: 'is' },
    { label: t('balanceSheet'), statement: 'is' },
  ];

  const list = [
    { value: 'annual', label: 'Annual' },
    { value: 'quarterly', label: 'Quarterly' },
  ];

  const searchStock = async (payload: FinancialDataAsReportedPayload) => {
    setLoading(true);
    try {
      const res = await getFinancialAsReportedData(payload);
      setData(res);
      setLoading(false);
    } catch (e) {
      setError(e);
      console.error(e);
    }
  };

  return (
    <FormProvider {...methods}>
      <Card sx={{ padding: '100px' }}>
        <CardContent>
          <Grid2
            spacing={8}
            container
            alignContent={'center'}
            alignItems={'center'}
            alignSelf={'center'}
          >
            <Grid2 size={12}>
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
                  <CardActions
                    sx={{ justifyContent: 'flex-end', padding: '50px' }}
                  >
                    <Button
                      variant={'contained'}
                      color={'secondary'}
                      onClick={methods.handleSubmit(searchStock)}
                    >
                      {t('search')}
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid2>
            {loading ? (
              <CircularProgress color="error" />
            ) : (
              <Card>
                <CardContent>
                  <Grid2 container spacing={8}>
                    {statementList.map((e) => (
                      <Grid2 size={12}>
                        <StockAnalysisPaper
                          statement={e.statement}
                          label={e.label}
                          data={data}
                        />
                      </Grid2>
                    ))}
                  </Grid2>
                </CardContent>
              </Card>
            )}
          </Grid2>
        </CardContent>
      </Card>
      <Snackbar open={!!error?.message} autoHideDuration={1}>
        <Alert severity="error" variant="filled" sx={{ width: '100%' }}>
          {error?.message}
        </Alert>
      </Snackbar>
    </FormProvider>
  );
};
