import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import * as exampleActions from '../../store/modules/example/actions';
// React.fragment é um componente vazio

export default function Aluno() {
  const dispatch = useDispatch(); // irá disparar as ações.

  // O que são ações? -> irá disparar ações para o redux, ou seja informando ele o que ele tem que fazer

  // Assim que o componente é montado ele irá executar esse effect
  useEffect(() => {
    // Sua função axios que realiza a requisição, chamando a API
    async function getData() {
      const response = await axios.get('/alunos');
      console.log(response);
    }

    getData();
  });

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotao());
    dispatch(exampleActions.clicaRequest());
  }

  return (
    <Container>
      <h1>Página de Aluno</h1>
    </Container>
  );
}
