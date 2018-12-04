import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes'
import * as headerActionTypes from '../../../common/header/store/actionTypes'

const defaultState = fromJS({
  isLoginType: true,
  isLogin: false,
  username: '',
  password: '',
})

export default (state=defaultState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_LOGIN:
      return state.set('isLoginType', action.value);
    case actionTypes.HANDLE_REGISTER:
      return state.set('isLoginType', action.value);
    case actionTypes.LOGIN_STATUS:
      return state.merge({
        isLogin: true,
        username: action.value.username,
        password: action.value.password,
      });
    case headerActionTypes.HANDLE_LOGOUT:
      return state.merge({
        isLogin: false,
        username: '',
        password: '',
      });
    default:
      break;
  }
  return state
}