import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/GlobalStyles';
import history from './services/history';
import NavBar from './components/header';
import AppRoutes from './routes';

export default function App() {
  return (
    <BrowserRouter history={history}>
      <NavBar />
      <AppRoutes />
      <GlobalStyles />
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}
