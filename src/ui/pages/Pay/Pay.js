import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import {connect} from 'react-redux'
class Pay extends React.Component{
	render(){
		console.log('pay......',this.props.payment)
		return(<div className='pay'>
			<TitleHeader title='please choose payment way'/>
			{this.props.payment.map(item => <li key='Math.random()'>{item}</li>)}
		</div>)
	}
}
const mapStateToProps=(state)=>({
	payment:state.payment
})
export default connect(mapStateToProps)(Pay)