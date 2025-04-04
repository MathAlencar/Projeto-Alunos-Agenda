import * as types from './types';

export function RequestAlunoSucces(payLoad) {
  return {
    type: types.CREATE_EDIT_SUCCESS,
    payLoad,
  };
}

export function RequestAlunoFail(payLoad) {
  return {
    type: types.CREATE_EDIT_FAIL,
    payLoad,
  };
}

export function RequestAlunoRequest(payload) {
  return {
    type: types.CREATE_EDIT_ALUNO_REQUEST,
    payload,
  };
}
