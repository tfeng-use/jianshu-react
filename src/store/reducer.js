// 当 combineReducers 从redux-immutable中来时，合并出来的就是immutable对象
import {
  combineReducers
} from 'redux-immutable';

import headerReducer from '../common/header/store/reducer'
import homeReaducer from '../views/home/store/reducer'
import loginReducer from '../views/login/store/reducer'

export default combineReducers({
  header: headerReducer,
  home: homeReaducer,
  login: loginReducer
})