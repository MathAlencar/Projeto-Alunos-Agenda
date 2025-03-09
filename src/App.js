import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import NavBar from './components/header';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
