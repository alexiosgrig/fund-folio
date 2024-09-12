import React, { useState } from 'react';
import { TableShared } from '../shared-elements/table/TableShared';
import { InputField } from '../shared-elements/input-field/InputField';
import { DatePickerShared } from '../date-picker/DatePicker';
import { Charts } from '../charts/Charts';
import { FinancialDataAsReportedResponse } from '../services/IFinancialData';
import { getFinancialAsReportedData } from '../services/services';

export const AppContent = () => {
  const [financialData, setFinancialData] = useState([
    {} as FinancialDataAsReportedResponse,
  ]);

  const [selectedDate, setSelectedDate] = useState(undefined); // Initialize state
  const [symbol, setSymbol] = useState('');
  const columns = [{ label: 'Label' }, { label: 'Value' }];

  const rowsToDisplay = ['label', 'value'];

  const onSubmit = async (symbol: string) => {
    setSymbol(symbol);
    try {
      const response = await getFinancialAsReportedData({
        symbol: symbol,
        from: selectedDate,
        freq: 'annual',
      });
      setFinancialData(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="flex flex-col items-center justify-center mt-12 flex-grow">
      <DatePickerShared setSelectedDate={setSelectedDate} />
      <div className="text-center mb-6">
        <InputField onSubmit={onSubmit} />
      </div>
      <div className="w-full flex justify-center">
        <TableShared
          columns={columns}
          rows={financialData[0]?.report?.bs}
          rowsToDisplay={rowsToDisplay}
          tableHeader={'Free Cash Flow'}
        />
      </div>
      <Charts symbol={symbol}/>
    </main>
  );
};
