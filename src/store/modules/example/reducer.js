import { toast } from 'react-toastify';
import * as type from './types';

// Definindo um estado inicial para o seu botão
const initialState = {
  botaoClicado: false,
  botaoClicadoDois: false,
};

// Todos os reducer, irá ouvir todas as ações disparadas.
export default function (state = {}, action = {}) {
  switch (action.type) {
    // case type.BOTAO_CLICADO:
    //   return {
    //     ...state, // Mantendo o estado imutável
    //     botaoClicado: !state.botaoClicado, // Alternando o valor corretamente
    //   };
    // case type.BOTAO_CLICADO_DOIS:
    //   return {
    //     ...state,
    //     botaoClicadoDois: !state.botaoClicadoDois,
    //   };

    case type.BOTAO_CLICADO_SUCCESS:
      toast.success('Sucesso');
      return {
        ...state,
        botaoClicado: !state.botaoClicado, // Alternando o valor corretamente
      };
    case type.BOTAO_CLICADO_FAIL:
      toast.success('Falha');
      return {
        ...state,
      };
    case type.BOTAO_CLICADO_REQUEST:
      console.log('Estou fazendo a requisição');
      return {
        ...state,
      };

    default:
      return state;
  }
}
