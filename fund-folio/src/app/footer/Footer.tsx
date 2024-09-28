import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label={t('dashboard')}
          icon={<DashboardIcon />}
          onClick={() => navigate('/')}
        />
        <BottomNavigationAction
          label={t('news')}
          icon={<NewspaperIcon />}
          onClick={() => navigate('/stock-news')}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
