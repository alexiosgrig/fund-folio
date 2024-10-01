import React from 'react';
import { Card, CardContent, Grid2 } from '@mui/material';
import { StockAnalysisPaper } from './StockAnalysisPaper';
import { useAppSelector } from '../store/hooks';
import { selectStockAnalysis } from '../slices/stockAnalysisSlice';
import { useTranslation } from 'react-i18next';

export const StockAnalysisDisplay = () => {
  const { t } = useTranslation();
  const stockAnalysisData = useAppSelector(selectStockAnalysis);

  const statementList = [
    { label: t('freeCashFlow'), statement: 'cf' },
    { label: t('incomeStatement'), statement: 'ic' },
    { label: t('balanceSheet'), statement: 'bs' },
  ];

  return (
    <Card>
      <CardContent>
        <Grid2 container spacing={12}>
          {statementList.map((e, index) => (
            <Grid2 size={12} key={index}>
              <StockAnalysisPaper
                statement={e.statement}
                label={e.label}
                data={stockAnalysisData}
              />
            </Grid2>
          ))}
        </Grid2>
      </CardContent>
    </Card>
  );
};
