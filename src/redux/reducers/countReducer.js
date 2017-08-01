let defaultState={
	countNumber:0,
	countEat:0,
	countPick:0
}
export default function countReducer(state=defaultState,action){
	switch(action.type){
		case 'EAT':
			return {...state,countEat:state.countEat+1,countNumber:state.countNumber-1}
		case 'PICK':
			return {...state,countPick:state.countPick+1,countNumber:state.countNumber+1}
		default:
			return state;
	}
}