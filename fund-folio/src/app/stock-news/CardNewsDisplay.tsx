import React from 'react';
import { CircularProgress, Grid2 } from '@mui/material';
import { CardNews } from './CardNews';
import { useAppSelector } from '../store/hooks';
import { selectNewsData, selectNewsLoading } from '../slices/newsSlice';

export const CardNewsDisplay = () => {
  const newsData = useAppSelector(selectNewsData);
  const loading = useAppSelector(selectNewsLoading);

  return (
    <>
      {loading ? (
        <CircularProgress color="error" />
      ) : (
        <Grid2 container spacing={8}>
          {newsData?.map((item, index) => (
            <Grid2 size={3} key={index}>
              <CardNews news={item} />
            </Grid2>
          ))}
        </Grid2>
      )}
    </>
  );
};
