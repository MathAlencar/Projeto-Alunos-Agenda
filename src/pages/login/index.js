import React from 'react';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';
// React.fragment é um componente vazio

export default function login() {
  return (
    <Container>
      <Title>
        loginasasas
        <small>Oi</small>
      </Title>
      <button type="button">Enviar</button>
    </Container>
  );
}
