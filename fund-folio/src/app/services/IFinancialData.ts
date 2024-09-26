export interface FinancialDataAsReportedPayload {
  symbol?: string;
  cik?: string;
  accessNumber?: number;
  freq?: 'annual' | 'quarterly';
  from?: Date;
  to?: Date;
}

export interface ReportItem {
  concept: string;
  label: string;
  unit: string;
  value: number;
}

export interface Report {
  bs: ReportItem[];
  cf: ReportItem[];
  ic: ReportItem[];
}

export interface FinancialDataAsReportedResponse {
  acceptedDate: string;
  accessNumber: string;
  cik: string;
  endDate: Date;
  form: string;
  quarter: number;
  startDate: Date;
  symbol: string;
  year: number;
  report: Report;
}
