import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { SnackbarShared } from './shared-elements/SnackbarShared';

export function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: '#e3f2fd',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Outlet />
        <SnackbarShared />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
