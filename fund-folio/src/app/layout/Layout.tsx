import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { ActionBarButtons } from '../action-bar-buttons/ActionBarButtons';
import { Container } from '@mui/material';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ActionBarButtons />
      <Container sx={{ padding: '100px' }}>{children}</Container>

      <Footer />
    </>
  );
};
