import React, { useEffect, useState } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Form } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as Actions from '../../store/modules/auth/actions';

// React.fragment é um componente vazio

export default function login() {
  const dispatch = useDispatch(); // responsável para realizar o disparo de eventos.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const prevPathNow = useSelector((state) => state.auth.prevPath);
  // realizando uma verificação, se caso for /login, ele irá redirecionar para a aba padrão do navegador.
  const prevPath =
    prevPathNow === '/login' || prevPathNow === undefined ? '/' : prevPathNow; // capturando a Rota anterior a qual o usuário tentou acessar.
  // Caso o usuário esteja logado no sistema ele irá ser redirecionado para a página de inicio da aplicação.
  if (isLoggedIn) {
    return (
      <Navigate
        to={{
          pathname: prevPath,
        }}
      />
    );
  }

  const handleSubmit = (e) => {
    let errors = false;
    e.preventDefault();

    if (!validator.isEmail(email)) {
      toast.error('Email inválido');
      errors = true;
    }

    if (password.length < 3 || password.length > 50) {
      toast.error('Senha inválida');
      errors = true;
    }

    if (errors) return;
    dispatch(Actions.LoginRequest({ email, password })); // Irá executar ação e enviar para o SAGA e o REDUCER a ação
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="Email">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Conforme for digitando ele vai aparecer.
            placeholder="Seu Email"
          />
        </label>
        <label htmlFor="Senha">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Seu senha"
          />
        </label>

        <button type="submit">Login</button>
      </Form>
    </Container>
  );
}
