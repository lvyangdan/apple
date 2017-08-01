import React from 'react';
import {connect} from 'react-redux';
import store from '../../../redux/store';
import './tree.css'
class Tree extends React.Component{
	pick=(e)=>{
		e.preventDefault()
		store.dispatch({type:'PICK'})
	}
	render(){
		return(<div className='tree'>
			<p>当前果树的苹果数目：{this.props.tree.appleCount}</p>
			<button onClick={this.pick}>pick</button>
		</div>)
	}
}
const mapStateToProps=(state)=>({
	tree:state.tree
})
export default connect(mapStateToProps)(Tree)