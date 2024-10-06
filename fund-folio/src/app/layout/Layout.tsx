import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { ActionBarButtons } from '../action-bar-buttons/ActionBarButtons';
import { Container, Grid2 } from '@mui/material';

export const Layout = ({ children }) => {
  return (
    
    <Grid2 container spacing={12}>
      <Grid2 size={{ xs: 12, md: 12, sm: 12 }}>
        <Header />
      </Grid2>
      <Grid2
        size={{ xs: 12, md: 12, sm: 12 }}
        container
        justifyContent={'center'}
      >
        <ActionBarButtons />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 12, sm: 12 }}>
        <Container>{children}</Container>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 12, sm: 12 }}>
        <Footer />
      </Grid2>
    </Grid2>
  );
};
