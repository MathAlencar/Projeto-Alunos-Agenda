import * as type from './types';
import axios from '../../../services/axios';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (state = {}, action = {}) {
  switch (action.type) {
    case type.CREATE_EDIT_SUCCESS: {
      return {
        ...state,
      };
    }
    case type.CREATE_EDIT_ALUNO_REQUEST: {
      return {
        ...state,
      };
    }
    case type.CREATE_EDIT_FAIL: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
