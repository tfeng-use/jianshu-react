import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getToRegisterAction = (value) => ({
  type: actionTypes.HANDLE_REGISTER,
  value
})

export const getToLoginAction = (value) => ({
  type: actionTypes.HANDLE_LOGIN,
  value
})

export const getLoginStatus = (value) => ({
  type: actionTypes.LOGIN_STATUS,
  value
})

export const getLoginStatusAction = (value) => {
  return (dispatch) => {
    axios.get('/api/login/loginStatus.json').then(response => {
      let res = response.data;
      if (res.status === '200') {
        dispatch(getLoginStatus(value));
      }
    })
  }
}
