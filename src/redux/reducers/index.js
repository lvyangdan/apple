import {combineReducers} from 'redux'
import count from './countReducer'
import tree from './treeReducer'
import market from './marketReducer'
import payment from './payReducer'

const rootReducers=combineReducers({
	count,
	tree,
	market,
	payment
})
export default rootReducers