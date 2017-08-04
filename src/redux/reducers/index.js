import {combineReducers} from 'redux'
import count from './countReducer'
import tree from './treeReducer'
import market from './marketReducer'

const rootReducers=combineReducers({
	count,
	tree,
	market
})
export default rootReducers