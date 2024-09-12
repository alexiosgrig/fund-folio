import { BarChart } from '@mui/x-charts';
import React, { useCallback, useEffect, useState } from 'react';
import { getRecommendationsData } from '../services/services';

// Define the type for your recommendation data
interface IRecommendationMapData {
  data: number[];
  stack: string;
  label: string;
}

interface ChartsProps {
  symbol: string;
}

export const Charts: React.FC<ChartsProps> = ({ symbol }) => {
  // Initialize state for series with the appropriate type
  const [series, setSeries] = useState<IRecommendationMapData[] | undefined>(
    undefined
  );

  const getRecommendations = useCallback(async () => {
    try {
      const response = await getRecommendationsData({ symbol });
      if (response && response.length > 0) {
        const newRecommendationsArray: IRecommendationMapData[] = [
          {
            data: [response[0]?.strongBuy ?? 0],
            stack: '1',
            label: 'Strong Buy',
          },
          { data: [response[0]?.buy ?? 0], stack: '2', label: 'Buy' },
          { data: [response[0]?.hold ?? 0], stack: '3', label: 'Hold' },
          { data: [response[0]?.sell ?? 0], stack: '4', label: 'Sell' },
          {
            data: [response[0]?.strongSell ?? 0],
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
