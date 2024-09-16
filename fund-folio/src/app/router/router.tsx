import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { ChartsShared } from '../shared-elements/charts/ChartsShared';
import App from '../app';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'recommendations', // Relative path to /recommendations
        element: <ChartsShared symbol="AAPL" />,
      },
    ],
  },
  {
    path: 'recommendations',
    element: <ChartsShared symbol="AAPL" />,
  },
]);
