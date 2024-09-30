import { IRecommendationsResponse } from '../services/IRecommendations';
import { IRecommendationMapData } from '../shared-elements/charts/ChartsShared';

export const handleRecommendationsData = (
  recomendationData: IRecommendationsResponse[] | undefined
) => {
  if (recomendationData) {
    const strongBuyData = [];
    const buyData = [];
    const holdData = [];
    const sellData = [];
    const strongSell = [];

    for (const data of recomendationData) {
      strongBuyData.push(data.strongBuy);
      buyData.push(data.buy);
      holdData.push(data.hold);
      sellData.push(data.sell);
      strongSell.push(data.strongSell);
    }

    const newRecommendationsArray: IRecommendationMapData[] = [
      {
        data: strongBuyData,
        stack: '1',
        label: 'Strong Buy',
      },
      { data: buyData, stack: '2', label: 'Buy' },
      { data: holdData, stack: '3', label: 'Hold' },
      { data: sellData, stack: '4', label: 'Sell' },
      {
        data: strongSell,
        stack: '5',
        label: 'Strong Sell',
      },
    ];
    return newRecommendationsArray;
  }
};
