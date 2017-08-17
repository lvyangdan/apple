import React from 'react'
import './Home.css'
import {connect} from 'react-redux'
import store from '../../../redux/store'
import img from './apple.jpg'
import {Link} from 'react-router-dom'
import TitleHeader from '../../shared/TitleHeader/TitleHeader';
class Home extends React.Component{
	eat=(e)=>{
		e.preventDefault();
		if(this.props.count.countNumber>=1){
			store.dispatch({type:'EAT'})
		}	
	}
	pick=(e)=>{
		e.preventDefault();
		if(this.props.tree.appleCount>3){
			store.dispatch({type:'PICK'})
		}
		
	}
	render(){
		return(
		<div className="pages">
			<TitleHeader title='apple basket'/>
			<div className='state'>				
				<span>你拥有的苹果数目：{this.props.count.countNumber}</span>
				<span>劳动过程中吃掉数：{this.props.count.countEat}</span>
				<span>劳动过程中采摘数：{this.props.count.countPick}</span>
				<div>树上剩下：{this.props.tree.appleCount}</div>
			</div>
			<Link to='/tree'><img src={img} alt="apple"/></Link>
			<div><button onClick={this.eat}>eat</button></div>
			<div className='item'>
				<div><Link to='tree'>去采摘苹果</Link></div>

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