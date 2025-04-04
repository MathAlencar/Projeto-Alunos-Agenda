import React, { useEffect, useState } from 'react';
import { get, isLength } from 'lodash'; // Irá permitir que você realize buscas no objeto tentando enconrar o valor, caso não existir ele irá dar um valor padrão.
import { Link, useNavigate } from 'react-router-dom';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, FotoConteiner } from './styled';
import * as Actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';

// React.fragment é um componente vazio

// useSate -> irá configurar o seu estado, ouse seja você poderá armazenar os dados vindoda API no código.

export default function Alunos() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [alunos, setAlunos] = useState([]); // isso é um hook, irá retornar sempre duas coisas, o valor(alunos) e uma função para settar esse valor(setAlunos)
  // Isso é considerado um react hook
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }
    getData();
  }, []);

  // Interação para confirmar a exclusão do usuário.
  const handleDeleteAsk = (e) => {
    e.preventDefault();

    const exclamation = e.currentTarget.nextSibling; // Aqui você está pegando o parente desta tag, no caso o exclamação que está oculto.
    exclamation.setAttribute('display', 'block'); // Alterando a sua visualização.
    e.currentTarget.remove(); // Excluindo o elemento que será alterado.
  };

  // Opção que de fato excluir o usuário.
  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      await axios.delete(`/alunos/${id}`); // Após realizar a alteração do elemento, ele irá executar a API.
      const novosAlunos = [...alunos]; // Copiando os alunos capturados pela primeira chamada.
      novosAlunos.splice(index, 1); // Cortando onde o elemento/aluno foi selecionado.
      setAlunos(novosAlunos); // Reexibindo novemten, porém sem o aluno excluido.
      e.currentTarget.parentElement.remove(); // removendo a tar pai(aluno) da página HTML.
    } catch (err) {
      const status = get(err, 'response.status', 0); // capturando o erro 401.
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(errors));

      if (status === 401) {
        // redirecionando o usuário para a página de login.
        // caso o e-mail for alterado ele toda e qualquer solicitação que precisar de token ele irá ser obrigado a alterar realizar o login novamente.
        toast.warn('Você precisa realizar o login novamente!');
        dispatch(Actions.LoginFail());
        navigate('/login');
        return;
      }
    }
  };

  return (
    <Container>
      <AlunoContainer>
        {alunos.map((aluno, index) => (
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

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} color="black" />
            </Link>
            <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} color="black" />
            </Link>
            <FaExclamation
              size={16}
              display="none"
              cursor="pointer"
              onClick={(e) => handleDelete(e, aluno.id, index)} // Aqui como é um map, você está percorrendo os elementos e os alunos, onde o index é a posição do array em que o aluno está.
            />
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
