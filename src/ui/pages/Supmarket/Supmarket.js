import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import {connect} from 'react-redux'
import './Supmarket.css'
class Supmarket extends React.Component{
	render(){
		return(<div>
			<TitleHeader title='Supmarket'/>
			<p>你的财富值：{this.props.market.money}</p>
			<div className='goods'></div>
		</div>)
	}
}
const mapStateToProps=(state)=>({
	market:state.market
})
export default connect(mapStateToProps)(Supmarket)