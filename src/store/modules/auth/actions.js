import * as types from './types';

export function LoginSucces(payLoad) {
  return {
    type: types.LOGIN_SUCCESS,
    payLoad,
  };
}

export function LoginRequest(payLoad) {
  return {
    type: types.LOGIN_REQUEST,
    payLoad,
  };
}

export function LoginFail(payLoad) {
  return {
    type: types.LOGIN_FAIL,
    payLoad,
  };
}

export function LogOut(payLoad) {
  return {
    type: types.LOGOUT,
    payLoad,
  };
}

export function setPrevPath(path) {
  return {
    type: types.SAVE_PREVPATH,
    payLoad: path,
  };
}

export function RequesteUserSucess(payLoad) {
  return {
    type: types.CREATE_EDIT_SUCESS,
    payLoad,
  };
}

export function RequesteUserRequest(payLoad) {
  return {
    type: types.CREATE_EDIT_REQUEST,
    payLoad,
  };
}

export function RequesteUserFailure(payLoad) {
  return {
    type: types.CREATE_EDIT_FAILURE,
    payLoad,
  };
}
