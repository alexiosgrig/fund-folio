import { BarChart } from '@mui/x-charts';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export interface IRecommendationMapData {
  data: number[];
  stack: string;
  label: string;
}

interface ChartsProps {
  series: IRecommendationMapData[] | undefined;
  loading: boolean;
}

export const ChartsShared: React.FC<ChartsProps> = ({ series, loading }) => {
  return (
    <div>
      {loading ? (
        <CircularProgress color="error" />
      ) : (
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['Recommendations'] }]}
          series={series ? series : []}
          width={500}
          height={500}
          barLabel="value"
        />
      )}
    </div>
  );
};
