export interface IEpsPayload {
  symbol?: string;
}

export interface IEpsObject {
  actual: number;
  estimate: number;
  period: string;
  quarter: number;
  surprise: number;
  surprisePercent: number;
  symbol: string;
  year: number;
}
export interface IEpsResponse {
  data: IEpsObject[];
}
