import React, { useEffect, useState } from 'react';
import { get } from 'lodash'; // Irá permitir que você realize buscas no objeto tentando enconrar o valor, caso não existir ele irá dar um valor padrão.
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, FotoConteiner } from './styled';
import axios from '../../services/axios';

// React.fragment é um componente vazio

// useSate -> irá configurar o seu estado, ouse seja você poderá armazenar os dados vindoda API no código.

export default function Alunos() {
  const [alunos, setAlunos] = useState([]); // isso é um hook, irá retornar sempre duas coisas, o valor(alunos) e uma função para settar esse valor(setAlunos)

  // Isso é considerado um react hook
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }
    getData();
  }, []);

  return (
    <Container>
      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <FotoConteiner>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={46} />
              )}
            </FotoConteiner>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`/aluno/${aluno.id}`}>
              <FaEdit size={16} color="black" />
            </Link>
            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} color="black" />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}

// const dispatch = useDispatch(); // irá disparar as ações.

// O que são ações? -> irá disparar ações para o redux, ou seja informando ele o que ele tem que fazer

// import { useDispatch } from 'react-redux';
// import * as exampleActions from '../../store/modules/example/actions';
//   function handleClick(e) {
//     e.preventDefault();

//     dispatch(exampleActions.clicaBotao());
//     dispatch(exampleActions.clicaRequest());
//   }
