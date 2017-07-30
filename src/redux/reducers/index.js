import {combineReducers} from 'redux'
import countReducer from './countReducer'

const rootReducers=combineReducers({
	count:countReducer
})
export default rootReducers