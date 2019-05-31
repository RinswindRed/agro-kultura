import { combineReducers } from 'redux'
import counter from './counter'
import movies from './movies'
import isLoged from './isLoged'

export default combineReducers({
  counter,
  movies,
  isLoged
})
