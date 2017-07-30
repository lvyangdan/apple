let defaultState={
	countcurrent:0,
	counteat:0
}
export default function countReducer(state=defaultState,action){
	console.log(action.data)
	switch(action.type){
		case 'EAT':return {...state,counteat:this.state.counteat-1,countcurrent:this.state.countcurrent-1};
		case 'PICK':return {...state,counteat:this.state.counteat,countcurrent:this.state.countcurrent+1};
		default:return state;
	}
}