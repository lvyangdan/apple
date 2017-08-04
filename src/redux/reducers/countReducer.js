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
			return {...state,countPick:state.countPick+3,countNumber:state.countNumber+3}
		case 'DEAL':
			return {...state,countNumber:action.leaveNumber}
		default:
			return state;
	}
}