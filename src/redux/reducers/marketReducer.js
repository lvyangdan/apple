let moneyDefault={
	countNumber:1,
	money:0
}
export default function marketReducer(state=moneyDefault,action){
	switch(action.type){

		case 'DEAL':return {...state,money:action.money,countNumber:action.leaveNumber}
		default:return state
	}
}