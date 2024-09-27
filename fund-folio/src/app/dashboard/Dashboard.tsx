import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid2,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReplayIcon from '@mui/icons-material/Replay';
import RecommendIcon from '@mui/icons-material/Recommend';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dashboardCardList = [
    { title: t('recommendation'), router: 'recommendations' },
    { title: t('stockAnalysis'), router: 'stock-analysis' },
    { title: t('stockNews'), router: 'stock-news' },
    { title: t('forex'), router: 'forex' },
    { title: t('crypto'), router: 'crypto' },
    { title: t('metrics'), router: 'metrics' },
  ];

  const startIcon = (title) => {
    switch (title) {
      case 'recommendations':
        return <RecommendIcon />;
      case 'stock-analysis':
        return <AnalyticsIcon />;
      case 'stock-news':
        return <NewspaperIcon />;
      case 'forex':
        return <CurrencyExchangeIcon />;
      case 'crypto':
        return <CurrencyBitcoinIcon />;
      default:
        return <> </>;
    }
  };

  return (
    <Grid2 container rowSpacing={8} spacing={8}>
      {dashboardCardList.map((list, index) => (
        <Grid2 size={4} key={index}>
          <Card variant="elevation">
            <CardContent>
              <CardHeader title={list?.title} />
              <CardActions>
                <Button
                  variant="text"
                  onClick={() => navigate(list?.router)}
                  startIcon={startIcon(list?.router)}
                >
                  {`Go to ${list?.title}`}
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};
