import React from 'react';
import './TitleHeader.css';
import img from './apple.svg';
import backimg from './back.svg';
class TitleHeader extends React.Component{
	render(){
		return(<div className='header'>
			<h2>
				<img src={img} alt=""/>
				Apple paradise 
				<img src={backimg} alt=""/>
			</h2>
		</div>)
	}
}
export default TitleHeader