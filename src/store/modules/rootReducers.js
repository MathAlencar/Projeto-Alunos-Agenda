import { combineReducers } from 'redux';
import auth from './auth/reducer';
import aluno from './aluno/reducer';
import exemplo from './example/reducer';

export default combineReducers({
  auth,
  aluno,
  exemplo,
});
