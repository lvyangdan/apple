let defaultState=[
		"支付宝",
		'微信'
]
export default function payReducer(state=defaultState,action){
	switch(action.type){
		case '':return state;
		default:return state;
	}
}