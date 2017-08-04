let moneyDefault={
	countNumber:1,
	money:0,
	visible:false
}
export default function marketReducer(state=moneyDefault,action){
	switch(action.type){

		case 'DEAL':return {...state,money:action.money,countNumber:action.leaveNumber,visible:true}
		default:return state
	}
}