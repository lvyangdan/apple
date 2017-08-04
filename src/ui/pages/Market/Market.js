import React from 'react';
import TitleHeader from '../../shared/TitleHeader/TitleHeader';
import {connect} from 'react-redux';
import store from '../../../redux/store';
import img1 from './marketimg/apple1.jpg';
import img2 from './marketimg/apple2.jpg';
import img3 from './marketimg/apple3.jpg';
import './Market.css';
class Market extends React.Component{
	deal=()=>{
		if(this.props.count.countNumber>10){
			store.dispatch({type:'DEAL',money:Math.floor(this.props.count.countNumber/10),leaveNumber:this.props.count.countNumber-Math.floor(this.props.count.countNumber/10)*10})
		}
	}
	render(){
		return(<div className='market'>
			<TitleHeader title='market'/>
			<img src={img1} alt=""/>
			<img src={img2} alt=""/>
			<img src={img3} alt=""/>
			<p>你拥有的苹果：{this.props.count.countNumber}</p>
			<button onClick={this.deal}>确定交易</button>
			<p>拥有的财富：{this.props.market.money}元</p>
		</div>)
	}
}
const mapStateToProps= (state) => ({
	count:state.count,
	market:state.market
})
export default connect(mapStateToProps)(Market)