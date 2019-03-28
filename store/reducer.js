import { combineReducers } from 'redux'; //合并reducer
import { reducer as homeReducer } from '../components/home/store'
import { reducer as headerReducer } from '../components/commons/header/store'

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer
})

export default reducer;
