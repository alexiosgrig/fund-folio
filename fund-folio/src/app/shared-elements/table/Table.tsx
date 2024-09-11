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

interface Column {
  label: string;
}


interface TableSharedProps {
  columns: Column[];
  rows: any[];
}

export const TableShared: React.FC<TableSharedProps> = ({ columns, rows }) => {
  return (
    <div className="overflow-x-auto">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell align="right">{column?.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={'dded'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {Object.keys(row).map((key) => (
                  <TableCell key={key}>{row[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Table;
