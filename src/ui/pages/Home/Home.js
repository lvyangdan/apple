import React from 'react'
import './Home.css'
import {connect} from 'react-redux'
import store from '../../../redux/store'
import img from './apple.jpg'
class Home extends React.Component{
	eat=(e)=>{
		e.preventDefault();
		store.dispatch({type:'EAT'})
	}
	pick=(e)=>{
		e.preventDefault();
		store.dispatch({type:'PICK'})
	}
	render(){
		return(
		<div className="pages">
			<h1>苹果篮子</h1>
			<div className='state'>
				<img src={img} alt="apple"/>当前：<span>{this.props.count}</span>
			</div>
			<div className='item'>
				<div><button onClick={this.eat}>eat</button></div>
			</div>
			<button onClick={this.pick}>pick apple</button>
		</div>)
	}
}

const mapStateToProps=(state) => ({
	count: state.count
})
export default connect(mapStateToProps)(Home)