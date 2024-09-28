import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';

interface IColumn {
  label: string;
}

interface TableSharedProps {
  columns: IColumn[];
  rowsToDisplay: any;
  rows: any[];
  tableHeader: string;
}

export const TableShared: React.FC<TableSharedProps> = ({
  columns,
  rows,
  rowsToDisplay,
  tableHeader,
}) => {
  const filteredRows = rows?.map((item) => {
    return Object.keys(item)
      .filter((key) => rowsToDisplay?.includes(key))
      .reduce((obj, key) => {
        obj[key] = item[key];
        return obj;
      }, {} as any);
  });
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" size={'medium'} padding="checkbox">
        <TableHead>
          <h6 className="font-bold">{tableHeader}</h6>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index} align="left">
                {column?.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            filteredRows?.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {Object.keys(row).map((key, cellIndex) => (
                  <TableCell key={cellIndex}>{row[key]}</TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Table;
