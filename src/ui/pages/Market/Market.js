import React from 'react';
import TitleHeader from '../../shared/TitleHeader/TitleHeader';
import {connect} from 'react-redux';
import img1 from './marketimg/apple1.jpg';
import img2 from './marketimg/apple2.jpg';
import img3 from './marketimg/apple3.jpg';
import './Market.css'
class Market extends React.Component{
	render(){
		return(<div className='market'>
			<TitleHeader title='market'/>
			<img src={img1} alt=""/>
			<img src={img2} alt=""/>
			<img src={img3} alt=""/>
			<p>苹果换钱：{(this.props.count.countNumber/10)+1}元</p>
		</div>)
	}
}
const mapStateToProps= (state) => ({
	count:state.count
})
export default connect(mapStateToProps)(Market)