import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as type from './types';

// Simulação de requisição
const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(); // ou use reject(new Error('Erro na requisição')) para testar erro
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaSucess());
  } catch (error) {
    yield put(actions.clicaFail());
  }
}

export default function* exampleSaga() {
  yield all([takeLatest(type.BOTAO_CLICADO_REQUEST, exampleRequest)]);
}
