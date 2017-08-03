import React from 'react';
import './TitleHeader.css';
import img from './apple.svg';
import backimg from './back.svg';
import {Link} from 'react-router-dom';
class TitleHeader extends React.Component{
	render(){
		return(<div className='header'>
			<h2>
				<Link to='/tree'><img src={img} alt="apple"/></Link>
				Apple paradise 
				<Link to='/'><img src={backimg} alt="back"/></Link>
			</h2>
		</div>)
	}
}
export default TitleHeader