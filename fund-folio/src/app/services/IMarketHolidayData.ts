export interface IMarketHolidayPayload {
  exchange: string;
}

export interface IMarketHolidayObject {
  eventName: string;
  atDate: string;
  tradingHour: string;
}
export interface IMarketHolidayResponse {
  data: IMarketHolidayObject[];
  exchange: string;
  timezone: string;
}
