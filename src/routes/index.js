import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Page404 from '../pages/page404';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
