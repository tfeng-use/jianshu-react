import * as actionTypes from './actionTypes'

import {fromJS} from 'immutable'

const defaultState = fromJS({
  focused: false,
  isMouseOver: false,
  list: [], // 这儿数组也会被转换为immutable数组
  pageNo: 0,
  pageSize: 10,
  totalPage: 0
})

export default (state=defaultState, action) => {
  if (action.type === actionTypes.INPUT_FOCUSE) {
    return state.set('focused', true)
  }
  if (action.type === actionTypes.INPUT_BLUR) {
    return state.set('focused', false)
  }
  if (action.type === actionTypes.HOT_ENTER) {
    return state.set('isMouseOver', true)
  }
  if (action.type === actionTypes.HOT_LEAVE) {
    return state.set('isMouseOver', false)
  }
  if (action.type === actionTypes.GET_HOT_LIST) {
    // 先将 action.value 转换为 immutable 对象，再转换
    let total = Math.ceil(action.value.length / state.get('pageSize'));
    return state.merge({
      list: fromJS(action.value),
      totalPage: total
    })
  }
  if (action.type === actionTypes.CHANGE_HOT_PAGE) {
    let page = state.get('pageNo') + 1;
    if (page === state.get('totalPage')) {
      page = 0;
    }
    return state.set('pageNo', page)
  }
  if (action.type === actionTypes.HOT_CLICK) {
    return state.set('isMouseOver', true)
  }
  return state;
}