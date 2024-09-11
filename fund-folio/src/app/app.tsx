import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import { AppContent } from './app-content/AppContent';

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AppContent />
      <Footer />
    </div>
  );
}

export default App;
