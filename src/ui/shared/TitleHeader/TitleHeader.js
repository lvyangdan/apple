import React from 'react';
import './TitleHeader.css';
import img from './apple.svg';
import backimg from './back.svg';
const TitleHeader=({title})=>(
	<div className='header'>
		<h2>
		<img src={backimg} alt=""/>
		{title}
		<img src={img} alt=""/>
		</h2>
	</div>
)
export default TitleHeader