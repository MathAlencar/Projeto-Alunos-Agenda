import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import * as Actions from '../../store/modules/auth/actions';

// React.fragment é um componente vazio

export default function login() {
  const dispatch = useDispatch();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const nomeStored = useSelector((state) => state.auth.user.nome);
  const sobrenomeStored = useSelector((state) => state.auth.user.sobrenome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const id = useSelector((state) => state.auth.user.id);

  // USando o useEffect ele irá executar esse comando somente uma única vez.
  useEffect(() => {
    if (!id) return;
    setNome(nomeStored);
    setSobrenome(sobrenomeStored);
    setEmail(emailStored);
  }, [id, nomeStored, emailStored, sobrenomeStored]);

  async function handleSubmit(e) {
    e.preventDefault();
    let errors = false;

    if (nome.length < 3 || nome.length > 255) {
      errors = true;
      toast.error('Campo nome deve ter entre 3 a 255 caracteres');
    }
    if (!id && (password.length < 3 || password.length > 255)) {
      errors = true;
      toast.error('Campo senha deve ter entre 3 a 50 caracteres');
    }

    if (!validator.isEmail(email)) {
      errors = true;
      toast.error('Email inválido');
    }

    if (errors) return;

    try {
      dispatch(
        Actions.RequesteUserRequest({
          id,
          nome,
          sobrenome,
          email,
          password,
          navigate,
        })
      );
    } catch (error) {
      const erros = get(error, 'response.data.error', []);
      erros.forEach((err) => {
        toast.error(err);
      });
    }
  }

  return (
    <Container>
      <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)} // Conforme for digitando ele vai aparecer.
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="sobrenome">
          Sobrenome:
          <input
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)} // Conforme for digitando ele vai aparecer.
            placeholder="Seu sobrenome"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Conforme for digitando ele vai aparecer.
            placeholder="Seu email"
          />
        </label>
        <label htmlFor="password">
          password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Conforme for digitando ele vai aparecer.
            placeholder="Sua password"
          />
        </label>

        <button type="submit">{id ? 'Salvar' : 'Criar perfil'}</button>
      </Form>
    </Container>
  );
}
