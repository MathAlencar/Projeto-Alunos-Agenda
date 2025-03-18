import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProtectRoute from './ProtectRoute';
import Login from '../pages/login/Login';
import Aluno from '../pages/Aluno/Aluno';
import Fotos from '../pages/Fotos/Fotos';
import Alunos from '../pages/Alunos/Alunos';
import Register from '../pages/Register/Register';
import Page404 from '../pages/page404/page404';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Alunos />} />
      <Route
        path="/aluno/:id/edit"
        element={
          <ProtectRoute isClosed>
            <Aluno />
          </ProtectRoute>
        }
      />
      <Route
        path="/aluno/"
        element={
          <ProtectRoute isClosed>
            <Aluno />
          </ProtectRoute>
        }
      />
      <Route
        path="/fotos/"
        element={
          <ProtectRoute isClosed>
            <Alunos />
          </ProtectRoute>
        }
      />
      <Route path="/login/" element={<Login />} />
      <Route path="/register/" element={<Register />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
