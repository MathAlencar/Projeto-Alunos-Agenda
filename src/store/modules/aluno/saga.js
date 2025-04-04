import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as actionsAuth from '../auth/actions';
import * as type from './types';
import axios from '../../../services/axios';

function* createEditUserRequest({ payload }) {
  const { id, nome, sobrenome, email, idade, peso, altura, navigate } = payload;
  try {
    if (id) {
      const response = yield call(axios.put, `/alunos/${id}`, {
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      }); // Criando novo aluno no banco de dados
      toast.success('Aluno atualizado com sucesso!');
    } else {
      const response = yield call(axios.post, '/alunos/', {
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      }); // Criando novo aluno no banco de dados
      const idNewAluno = response.data.id;
      toast.success('Aluno criado com sucesso!');
      if (navigate) navigate(`/aluno/${idNewAluno}/edit`);
    }
  } catch (e) {
    const erros = get(e, 'response.data.error', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      // caso o e-mail for alterado ele toda e qualquer solicitação que precisar de token ele irá ser obrigado a alterar realizar o login novamente.
      toast.warn('Você precisa realizar o login novamente!!');
      yield put(actionsAuth.LoginFail());
      if (navigate) navigate('/login');
      return;
    }

    // Gambiarra escrota, mas necessária, que coisa escrota
    if (erros.length > 0) {
      toast.error(e.response.data.error[0].errors[0].message);
    }
  }
}

export default all([
  takeLatest(type.CREATE_EDIT_ALUNO_REQUEST, createEditUserRequest),
]);
