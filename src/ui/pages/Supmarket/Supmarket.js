import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './Supmarket.css'
import Shampoo1 from './goods/1.jpg'
import Shampoo2 from './goods/1.jpg'
import cup1 from './goods/3.jpg'
import cup2 from './goods/4.jpg'
class Supmarket extends React.Component{
	render(){
		return(<div>
			<TitleHeader title='Supmarket'/>
			<p>你的财富值：{this.props.market.money}</p>
			<div className='goods'>
				<Link to='pay'><img src={Shampoo1} alt=""/><p>添加到购物车</p></Link>
				<Link to='pay'><img src={Shampoo2} alt=""/><p>添加到购物车</p></Link>
				<Link to='pay'><img src={cup1} alt=""/><p>添加到购物车</p></Link>
				<Link to='pay'><img src={cup2} alt=""/><p>添加到购物车</p></Link>
			</div>
		</div>)
	}
}
const mapStateToProps=(state)=>({
	market:state.market
})
export default connect(mapStateToProps)(Supmarket)