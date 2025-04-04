import React, { Children } from 'react'; // Biblioteca padrão react
import { Navigate } from 'react-router-dom'; // Para realizar a transição entras as rotas.
import PropTypes from 'prop-types'; // Funciona como uma validação dos parametros enviados nos componentes
import { useSelector, useDispatch } from 'react-redux';
import { setPrevPath } from '../store/modules/auth/actions';

// useSelector	-> Lê um valor da store Redux	Quando você precisa mostrar algo do estado
// dispatch	-> Envia uma ação que muda o estado Redux	Quando você quer atualizar algum dado

export default function MyRoute({ children, isClosed }) {
  const dispatch = useDispatch(); // ele será o responsável
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // essa variável que irá validar se a rota será fechada ou não, o seu controle irá vimd e uma API externa

  // Se algum dos casos for "!true" ele irá ser redirecionado para a página de login
  if (isClosed && !isLoggedIn) {
    dispatch(setPrevPath(window.location.pathname));
    return (
      <Navigate
        to={{
          pathname: '/login',
        }}
      />
    );
  }

  return children; // Caso for false, ele irá apenas retornar o componente corretamente
}

// // Aqui os props estão sendo definidos por padrão, caso eles não forem passados
MyRoute.defaultProps = {
  isClosed: false,
};

// Definindo os tipos de Props
MyRoute.propTypes = {
  children: PropTypes.node.isRequired, // aqui estou definido que o Children seja obrigatório
  isClosed: PropTypes.bool, // Enquanto que aqui estou definindo que seja do tipo boleano
};
