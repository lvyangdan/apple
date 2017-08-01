import {combineReducers} from 'redux'
import count from './countReducer'
import tree from './treeReducer'

const rootReducers=combineReducers({
	count,
	tree
})
export default rootReducers