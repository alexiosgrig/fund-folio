import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://finnhub.io/api',
});
const token = 'crgua1pr01qrbc715520crgua1pr01qrbc71552g';

interface FinancialDataAsReportedPayload {
  symbol?: string;
  cik?: string;
  accessNumber?: number;
  freq?: 'annual' | 'quarterly';
  from?: Date;
  to?: Date;
}

interface ReportItem {
  concept: string;
  label: string;
  unit: string;
  value: number;
}

interface Report {
  bs: ReportItem[];
  cf: ReportItem[];
  ic: ReportItem[];
}

export interface FinancialDataAsReportedResponse {
  acceptedDate: Date;
  accessNumber: Date;
  cik: string;
  endDate: Date;
  form: string;
  quarter: number;
  startDate: Date;
  symbol: string;
  year: number;
  report: Report;
}

export const getFinancialDataAsReported = async (
  payload: FinancialDataAsReportedPayload
): Promise<FinancialDataAsReportedResponse[]> => {
  try {
    const response = await api.get('v1/stock/financials-reported', {
      params: {
        ...payload,
        token,
      },
    });
    console.log(response.data.data, 'DATADATA');
    return response.data.data;
  } catch (err) {
    console.error('Error fetching financial data:', err);
    throw err;
  }
};
