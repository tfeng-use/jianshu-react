import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes'
import { shaffle } from '../../../utils/util'
const defaultState = fromJS({
  carouselList: [],
  topicList: [],
  articleList: [],
  writerList: [],
  articlePage: 1,
  writerPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_CAROUSE:
      return state.set('carouselList', fromJS(action.value))
    case actionTypes.GET_TOPIC:
      return state.set('topicList', fromJS(action.value))
    case actionTypes.GET_ARTICLE:
      return state.merge({
        articleList: state.get('articleList').concat(fromJS(action.value)),
        articlePage: action.articlePage
      })
    case actionTypes.GET_WRITER:
      let jsList = state.get('writerList').toJS();

      if (jsList.length) {
        let arr = shaffle(jsList);
        return state.merge({
          writerList: fromJS(arr),
          writerPage: action.writerPage
        })
      } else {
        return state.merge({
          writerList: fromJS(action.value),
          writerPage: action.writerPage
        })
      }
    default:
      return state
  }
}