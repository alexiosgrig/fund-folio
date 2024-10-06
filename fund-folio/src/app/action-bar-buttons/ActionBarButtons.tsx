import React from 'react';
import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReplayIcon from '@mui/icons-material/Replay';

export const ActionBarButtons = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box>
      {location.pathname !== '/' && (
        <Box
          display="flex"
          gap={{ xs: 12, sm: 24, md: 48 }} // Adjust gap for different screen sizes
          flexDirection={{ xs: 'row', sm: 'row' }} // Stack buttons vertically on small screens
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(-1)}
            startIcon={<ArrowBackIcon />}
            hidden
          >
            {t('back')}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => window.location.reload()}
            startIcon={<ReplayIcon />}
            hidden
          >
            {t('refresh')}
          </Button>
        </Box>
      )}
    </Box>
  );
};
