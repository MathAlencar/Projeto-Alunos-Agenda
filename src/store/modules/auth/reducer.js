import * as type from './types';
import axios from '../../../services/axios';

// Definindo um estado inicial para o seu botão
const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

// Todos os reducer, irá ouvir todas as ações disparadas.
export default function (state = {}, action = {}) {
  switch (action.type) {
    case type.LOGIN_SUCCESS: {
      // const newState = { ...initialState }; // Copiando o estado atual da aplicação e as variáveis definidas.
      // newState.isLoggedIn = true;
      // newState.token = action.payLoad.token;
      // newState.user = action.payLoad.user;
      // toast.success('Sucesso');
      return {
        ...state,
        isLoggedIn: true,
        token: action.payLoad.token,
        user: action.payLoad.user,
      };
    }

    case type.LOGIN_FAIL: {
      delete axios.defaults.headers.common.Authorization; //  excluindo o Authorization.
      const newState = { ...initialState }; // caso o login for falho, ele irá zerar todas as variáveis.
      return newState; // Retornando o estado atual, ou seja limpando as variáveis.
    }

    case type.LOGOUT: {
      const newState = { ...initialState }; // caso o login for falho, ele irá zerar todas as variáveis.
      return newState; // Retornando o estado atual, ou seja limpando as variáveis.
    }

    case type.SAVE_PREVPATH: {
      return {
        ...state, // não estamos alterando nada do state.
        prevPath: action.payLoad,
      };
    }

    case type.CREATE_EDIT_SUCESS: {
      const teste = { ...state }; // Pegando o estado atual da aplicação.
      state.user = action.payLoad; // passando o novo usuário alterado para o estado da aplicação.
      return state;
    }

    case type.CREATE_EDIT_FAILURE: {
      return {
        ...state,
      };
    }

    case type.CREATE_EDIT_REQUEST: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
