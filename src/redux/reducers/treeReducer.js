let treeDefault={
	appleCount:100
}
export default function treeReducer(state=treeDefault,action){
	switch(action.type){
		case 'PICK':return {...state,appleCount:state.appleCount-3};
		default:return state
	}
}