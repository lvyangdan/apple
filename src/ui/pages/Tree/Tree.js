import React from 'react';
import {connect} from 'react-redux';
import store from '../../../redux/store';
import TitleHeader from '../../shared/TitleHeader/TitleHeader';
import {Link} from 'react-router-dom';
import './tree.css';
class Tree extends React.Component{
	pick=(e)=>{
		e.preventDefault()
		store.dispatch({type:'PICK'})
	}
	render(){
		return(<div className='tree'>
			<TitleHeader/>
			<p>当前果树的苹果数目：{this.props.tree.appleCount}</p>
			<p>我拥有的苹果：{this.props.count.countNumber}</p>
			<button onClick={this.pick}>pick</button>
			<Link to='/market'>去市场</Link>
		</div>)
	}
}
const mapStateToProps=(state)=>({
	tree:state.tree,
	count:state.count
})
export default connect(mapStateToProps)(Tree)