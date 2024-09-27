import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../dashboard/Dashboard';
import { Typography } from '@mui/material';
import { StockAnalysis } from '../stock-analysis/StockAnalysis';
import { Recommendations } from '../recommendations/Recommendations';
import App from '../app';
import { StockNews } from '../stock-news/StockNews';
import { Metrics } from '../metrics/Metrics';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Typography> Error </Typography>,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: 'recommendations',
        element: <Recommendations />,
      },
      {
        path: 'stock-analysis',
        element: <StockAnalysis />,
      },
      {
        path: 'stock-news',
        element: <StockNews />,
      },
      {
        path: 'metrics',
        element: <Metrics />,
      },
    ],
  },
]);
