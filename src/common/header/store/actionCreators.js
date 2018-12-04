import * as actionTypes from './actionTypes'
import axios from 'axios';

const getHotList = (list) => ({
  type: actionTypes.GET_HOT_LIST,
  value: list
})

export const getInputFocuseAction = () => ({
  type: actionTypes.INPUT_FOCUSE
})

export const getInputBlurAction = () => ({
  type: actionTypes.INPUT_BLUR
})

export const getHotEnterAction = () => ({
  type: actionTypes.HOT_ENTER
})

export const getHotLeaveAction = () => ({
  type: actionTypes.HOT_LEAVE
})


export const getHotListAction = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(response => {
      let res = response.data;
      if (res.status === '200') {
        dispatch(getHotList(res.data))
      }
    })
  }
}

export const getChangeHotPageAction = () => ({
  type: actionTypes.CHANGE_HOT_PAGE
})

export const getHotClickAction = () => ({
  type: actionTypes.HOT_CLICK
})
export const getLogoutAction = () => ({
  type: actionTypes.HANDLE_LOGOUT
})
