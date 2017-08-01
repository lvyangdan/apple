import React from 'react'
import './Home.css'
import {connect} from 'react-redux'
import store from '../../../redux/store'
import img from './apple.jpg'
class Home extends React.Component{
	eat=(e)=>{
		e.preventDefault();
		if(this.props.count.countNumber>=1){
			store.dispatch({type:'EAT'})
		}	
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
				<img src={img} alt="apple"/>
				<span>总数：{this.props.count.countNumber}</span>
				<span>吃掉：{this.props.count.countEat}</span>
				<span>采摘：{this.props.count.countPick}</span>
			</div>
			<div className='item'>
				<div><button onClick={this.eat}>eat</button></div>
			</div>
			<button onClick={this.pick}>pick apple</button>
		</div>)
	}
}

const mapStateToProps=(state) => ({
	count:state.count
})

export default connect(mapStateToProps)(Home)