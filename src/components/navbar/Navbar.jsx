import React from 'react'
import './Navbar.css';
import rocket from './rocket.svg';

export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='navbar-icon'>
				<a href='/'><img className='navbar-icon-logo' src={rocket} alt={'rocket-logo'} />Speedy</a>
			</div>
			<div className='navbar-links'>
				<ul>
					<li><a href='/'>About</a></li>
					<li><a href='/'>Contact Us</a></li>
					<li><a href='/'>Blog</a></li>
				</ul>
			</div>
			<div className='navbar-button-container'>
				<a href='/'><button className='navbar-button'>Book a Meeting</button></a>
			</div>
		</div>
	)
}
