let defaultState=0
export default function countReducer(state=defaultState,action){
	switch(action.type){
		case 'EAT':return state-1;
		case 'PICK':return state+1;
		default:return state;
	}
}