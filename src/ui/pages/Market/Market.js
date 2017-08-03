import React from 'react';
import TitleHeader from '../../shared/TitleHeader/TitleHeader';
import {connect} from 'react-redux';
import store from '../../../redux/store'
class Market extends React.Component{
	render(){
		console.log(this.props.count)
		return(<div className='market'>
			<TitleHeader/>
			<p>苹果换钱：</p>
		</div>)
	}
}
const mapStateToProps=(state)=>{
	count:state.count
}
export default connect(mapStateToProps)(Market)