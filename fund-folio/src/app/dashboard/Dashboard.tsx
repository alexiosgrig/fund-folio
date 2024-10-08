import React from 'react';
import { Button, CardActions, Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import RecommendIcon from '@mui/icons-material/Recommend';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { CardContainerShared } from '../shared-elements/CardContainerShared';
import useDocumentTitle from '../hooks/useDocumentTitle';

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
    { title: t('eps'), router: 'eps' },
  ];

  const startIcon = (title: string) => {
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

  useDocumentTitle(t('dashboard'));

  return (
    <Grid2 container spacing={8}>
      {dashboardCardList.map((list, index) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
          <CardContainerShared title={list?.title} subheader={list?.title}>
            <CardActions>
              <Button
                variant="text"
                onClick={() => navigate(list?.router)}
                startIcon={startIcon(list?.router)}
              >
                {`${t('goTo')} ${list?.title}`}
              </Button>
            </CardActions>
          </CardContainerShared>
        </Grid2>
      ))}
    </Grid2>
  );
};
