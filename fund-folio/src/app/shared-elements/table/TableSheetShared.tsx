import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FinancialDataAsReportedResponse } from 'src/app/services/IFinancialData';

interface TableSheetSharedProps {
  data: FinancialDataAsReportedResponse[];
  statement: 'bs' | 'cf' | 'ic';
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function TableSheetShare({
  data,
  statement,
}: TableSheetSharedProps) {
  const bs = data?.map((row) => row.report.bs);
  const cf = data?.map((row) => row.report.cf);
  const ic = data?.map((row) => row.report.ic);

  const dataToShow = () => {
    if (statement === 'bs') {
      return bs;
    } else if (statement === 'cf') {
      return cf;
    } else if (statement === 'ic') {
      return ic;
    } else {
      return [];
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{'Description'}</StyledTableCell>
            {data?.slice(0, 4).map((row, index) => (
              <StyledTableCell key={index}>{`Acceptance Date: ${
                row.acceptedDate.split(' ')[0]
              }`}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataToShow()?.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{row[index]?.label}</StyledTableCell>
              {row.slice(0, 4).map((element) => (
                <StyledTableCell>
                  {element.value.toLocaleString()}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
