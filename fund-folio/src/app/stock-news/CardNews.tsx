import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { INewsResponse } from '../services/INewsData';

interface ICardNewsProps {
  news: INewsResponse;
}

export const CardNews: React.FC<ICardNewsProps> = ({ news }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={news.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {news.headline}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {news.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {news.source}
        </Button>
      </CardActions>
    </Card>
  );
};
