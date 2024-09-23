import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { InputField } from '../shared-elements/input-field/InputField';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionSummary, Grid2, Typography } from '@mui/material';

export const StockAnalysis = () => {
  const { t } = useTranslation();
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Grid2
        spacing={2}
        container
        alignContent={'center'}
        alignItems={'center'}
        alignSelf={'center'}
      >
        <Grid2 size={6}>
          <InputField
            id={'id'}
            label={t('enterStock')}
            name={'id'}
            variant={'filled'}
            color="error"
          />
        </Grid2>
        <Grid2 size={6}>
          <InputField
            id={'id'}
            label={t('enterStock')}
            name={'id'}
            variant={'filled'}
            color="error"
          />
        </Grid2>
        <Grid2 size={12}>
          <Accordion>
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <Typography>Accordion 2</Typography>
          </Accordion>
        </Grid2>
      </Grid2>
    </FormProvider>
  );
};
