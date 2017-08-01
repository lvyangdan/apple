import React from 'react'
import './Home.css'
import {connect} from 'react-redux'
import store from '../../../redux/store'
import img from './apple.jpg'
import {Link} from 'react-router-dom'
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
				<Link to='/tree'><img src={img} alt="apple"/></Link>
				<span>总数：{this.props.count.countNumber}</span>
				<span>吃掉：{this.props.count.countEat}</span>
				<span>采摘：{this.props.count.countPick}</span>
			</div>
			<div>剩下：{this.props.tree.appleCount}</div>
			<div className='item'>
				<div><button onClick={this.eat}>eat</button></div>
			</div>
			<button onClick={this.pick}>pick apple</button>
		</div>)
	}
}

const mapStateToProps=(state) => ({
	count:state.count,
	tree:state.tree
})

export default connect(mapStateToProps)(Home)