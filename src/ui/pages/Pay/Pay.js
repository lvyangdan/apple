import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import {connect} from 'react-redux'
import store from '../../../redux/store';
class Pay extends React.Component{
	pay=(e)=>{
		e.preventDefault()
		store.dispatch({type:'PAY'})
	}
	render(){
		return(<div className='pay'>
			<TitleHeader title='please choose payment way'/>
			{this.props.payment.map(item => <li key='Math.random()'>{item}</li>)}
			<button onClick={this.pay}></button>
		</div>)
	}
}
const mapStateToProps=(state)=>({
	payment:state.payment
})
export default connect(mapStateToProps)(Pay)