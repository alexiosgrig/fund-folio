import { BarChart } from '@mui/x-charts';
import React, { useCallback, useEffect, useState } from 'react';
import { getRecommendationsData } from '../../services/services';

interface IRecommendationMapData {
  data: number[];
  stack: string;
  label: string;
}

interface ChartsProps {
  symbol: string;
}

export const ChartsShared: React.FC<ChartsProps> = ({ symbol }) => {
  const [series, setSeries] = useState<IRecommendationMapData[] | undefined>(
    undefined
  );

  const getRecommendations = useCallback(async () => {
    try {
      const response = await getRecommendationsData({ symbol });
      if (response && response.length > 0) {
        const strongBuyData = [];
        const buyData = [];
        const holdData = [];
        const sellData = [];
        const strongSell = [];

        for (const data of response) {
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
        setSeries(newRecommendationsArray);
      } else {
        console.warn('No data available');
      }
    } catch (err) {
      console.warn('Error fetching recommendations:', err);
    }
  }, [symbol]);
  useEffect(() => {
    getRecommendations();
  }, [getRecommendations]);

  return (
    <div>
      {series ? (
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['Recommendations'] }]}
          series={series}
          width={600}
          height={500}
          barLabel="value"
        />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};
