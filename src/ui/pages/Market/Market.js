import React from 'react';
import TitleHeader from '../../shared/TitleHeader/TitleHeader';
import {connect} from 'react-redux'
class Market extends React.Component{
	render(){
		return(<div className='market'>
			<TitleHeader/>
			<p>苹果换钱：{this.props.count/10}</p>
		</div>)
	}
}
const mapStateToProps=(state)=>{
	count:state.count
}
export default connect(mapStateToProps)(Market)