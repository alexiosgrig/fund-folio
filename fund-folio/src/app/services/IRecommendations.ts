export interface IRecommendationsPayload {
  symbol: string;
}

export interface IRecommendationsResponse {
    buy: number;
    hold: number;
    sell: number;
    strongBuy: number;
    strongSell: number;
    period: string;
    symbol: string;
  }