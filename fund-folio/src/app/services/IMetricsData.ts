export interface IMetricsPayload {
  symbol: string;
  metric?: string;
}

export interface IMetricsResponse {
  metric: any;
  metricType: any;
  series: any;
  symbol: any;
}
