import { all } from 'redux-saga/effects';
import auth from './auth/saga';
import aluno from './aluno/saga';
import exemplo from './example/saga';

export default function* rootSaga() {
  yield all([auth, aluno, exemplo]);
}
