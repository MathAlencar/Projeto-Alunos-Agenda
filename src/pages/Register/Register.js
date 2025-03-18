import React, { useState } from 'react';
import { toast } from 'react-toastify';
import validator from 'validator';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
// React.fragment é um componente vazio

export default function login() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let errors = false;

    if (nome.length < 3 || nome.length > 255) {
      errors = true;
      toast.error('Campo nome deve ter entre 3 a 255 caracteres');
    }
    if (password.length < 3 || password.length > 255) {
      errors = true;
      toast.error('Campo senha deve ter entre 3 a 50 caracteres');
    }

    if (!validator.isEmail(email)) {
      errors = true;
      toast.error('Email inválido');
    }

    if (errors) return;

    try {
      const response = await axios.post('users/', {
        nome,
        sobrenome,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <h1>Crie um usuário</h1>
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

        <button type="submit">Criar perfil</button>
      </Form>
    </Container>
  );
}
