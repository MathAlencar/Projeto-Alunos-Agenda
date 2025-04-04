import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as type from './types';
import axios from '../../../services/axios';

function* loginRequest({ payLoad }) {
  try {
    const response = yield call(axios.post, '/tokens/', payLoad);
    yield put(actions.LoginSucces({ ...response.data }));
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`; // passando no cabeçalho de toda requisição o valor padrão.
    toast.success('Você fez login'); // qualquer erro que ocorrer no saga já será inválido.
  } catch (e) {
    toast.error('Usuário ou senha inválido'); // qualquer erro que ocorrer no saga já será inválido.
    yield put(actions.LoginFail()); // Em caso de erro ele irá executar essa API de erro.
  }
}

function* persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function* RequestUser({ payLoad }) {
  const { id, nome, email, password, sobrenome, navigate } = payLoad;
  try {
    if (id) {
      const response = yield call(axios.put, '/users/', {
        email,
        nome,
        sobrenome,
        password: password || undefined, // Aqui você está alterando a verificação no banco de dados na senha que vemd ando erro.
      });
      toast.success('Usuário atualizado com sucesso!');
      yield put(actions.RequesteUserSucess({ nome, sobrenome, id, email }));
    } else {
      yield call(axios.post, '/users', {
        nome,
        email,
        sobrenome,
        password,
      }); // Criando novo usuário
      toast.success('Usuário criado com sucesso!');
      if (navigate) navigate('/login');
    }
  } catch (e) {
    const erros = get(e, 'response.data.error', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      // caso o e-mail for alterado ele toda e qualquer solicitação que precisar de token ele irá ser obrigado a alterar realizar o login novamente.
      toast.warn('Você precisa realizar o login novamente!');
      yield put(actions.LoginFail());
      if (navigate) navigate('/login');
      return;
    }

    if (erros.length > 0) {
      erros.forEach((err) => {
        toast.error(err);
      });
    }
  }
}

export default all([
  takeLatest(type.LOGIN_REQUEST, loginRequest),
  takeLatest(type.PERSIST_REHYDRATE, persistRehydrate), // Aqui você está colocando a requisição para ser executada com sucesso!
  takeLatest(type.CREATE_EDIT_REQUEST, RequestUser), // Aqui você está colocando a requisição para ser executada com sucesso!
]);
