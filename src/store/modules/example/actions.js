import * as types from './types';

export function clicaBotao() {
  return {
    type: types.BOTAO_CLICADO,
  };
}

export function clicaBotaoDois() {
  return {
    type: types.BOTAO_CLICADO_DOIS,
  };
}

export function clicaSucess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}

export function clicaRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}

export function clicaFail() {
  return {
    type: types.BOTAO_CLICADO_FAIL,
  };
}
