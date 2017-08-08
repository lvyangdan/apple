import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import {connect} from 'react-redux'
import './Supmarket.css'
import goods1 from './1.jpg'
import goods2 from './2.jpg'
class Supmarket extends React.Component{
	render(){
		return(<div>
			<TitleHeader title='Supmarket'/>
			<p>你的财富值：{this.props.market.money}</p>
			<div className='goods'>
				<img src={goods1} alt=""/>
				<img src={goods2} alt=""/>
			</div>
		</div>)
	}
}
const mapStateToProps=(state)=>({
	market:state.market
})
export default connect(mapStateToProps)(Supmarket)