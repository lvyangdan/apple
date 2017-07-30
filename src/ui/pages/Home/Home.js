import React from 'react'
import './Home.css'
import {connect} from 'react-redux'
import store from '../../../redux/store'
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
				当前：<span>1</span>
				已吃掉：<span>1</span>
			</div>
			<div className='item'>
				<div><span>1号</span><button onClick={this.eat}>eat</button></div>
				<div><span>2号</span><button onClick={this.eat}>eat</button></div>
				<div><span>3号</span><button onClick={this.eat}>eat</button></div>
			</div>
			<button onClick={this.pick}>pick apple</button>
		</div>)
	}
}
export default connect(null)(Home)