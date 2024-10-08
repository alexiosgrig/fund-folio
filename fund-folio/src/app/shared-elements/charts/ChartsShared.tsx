import { BarChart } from '@mui/x-charts';
import React from 'react';
import { Box } from '@mui/material'; // Import MUI's Box

export interface IRecommendationMapData {
  data: number[];
  stack: string;
  label: string;
}

interface ChartsProps {
  series: IRecommendationMapData[] | undefined;
  data: string[];
}

export const ChartsShared: React.FC<ChartsProps> = ({ series,data }) => {
  return (
    <Box
      sx={{
        width: '100%', // Full width
        height: {
          // Responsive height based on screen size
          xs: 300, // 300px height on small screens (xs)
          sm: 400, // 400px height on small-medium screens (sm)
          md: 500, // 500px height on medium+ screens (md and above)
        },
        display: 'flex', // Centering chart or loader
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BarChart
        sx={{ width: '100%', height: '100%' }} // Responsive styling via sx
        xAxis={[{ scaleType: 'band', data: data }]}
        series={series ? series : []}
        width={500} // Width and height need to be numbers, so we pass default sizes.
        height={300} // These numbers are just for fallback; real control is via sx
        barLabel="value"
      />
    </Box>
  );
};
