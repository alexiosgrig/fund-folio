import React, { useEffect, useState } from 'react';
import {
  CircularProgress,
  Container,
  Grid2,
} from '@mui/material';
import { CardNews } from './CardNews';
import { getNewsData } from '../services/services';
import { INewsResponse } from '../services/INewsData';

export const StockNews = () => {
  const [news, setNews] = useState<INewsResponse[]>([]);

  const getData = async () => {
    const res = await getNewsData({ category: 'news' });
    setNews(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container >
      {news.length ? (
        <Grid2 container spacing={8}>
          {news.map((item, index) => (
            <Grid2 size={3} key={index}>
              <CardNews news={item} />
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <CircularProgress color="error" />
      )}
    </Container>
  );
};
