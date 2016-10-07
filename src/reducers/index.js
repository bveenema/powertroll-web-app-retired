import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import toggler from './toggler';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  toggler,
})

export default todoApp
