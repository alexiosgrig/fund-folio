import { Card } from '@mui/material';
import React from 'react';
import TableSheetShared from '../shared-elements/table/TableSheetShared';
import { AccordionShared } from '../shared-elements/accordion/AccordionShared';

interface StockAnalysisFCFProps {
  data: any;
  statement: any;
  label: string;
}

export const StockAnalysisPaper: React.FC<StockAnalysisFCFProps> = ({
  data,
  statement,
  label,
}) => {
  return (
    <AccordionShared label={label}>
      <Card>
        <TableSheetShared data={data} statement={statement} />
      </Card>
    </AccordionShared>
  );
};
