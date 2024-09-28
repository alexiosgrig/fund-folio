import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';

export function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: '#e3f2fd', // Set your desired background color
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
