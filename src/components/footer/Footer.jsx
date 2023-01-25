import React from 'react'
import './Footer.css';
import speedy from './speedy_logo.svg';
import insta from './Instagram.svg';
import twitter from './Twitter.svg';
import facebook from './Facebook.svg';

export default function Footer() {
	return (
		<div className='footer-section'>
			<div className='footer-left'>
				<div className='footer-content'>
					<div className='speedy-logo'>
						<img src={speedy} alt="speedy logo" />
					</div>
					<div className='footer-description'>Speedy is a private virtual network that has unique features and has high security.</div>
					<div className='footer-socials'>
						<img src={facebook} alt='social' />
						<img src={twitter} alt='social' />
						<img src={insta} alt='social' />
					</div>
				</div>
				<div className='footer-quick-links'>
					<b className='quick-title'>Quick Links</b>
					<ul>
						<li>Book A Meeting</li>
						<li>About</li>
						<li>Features</li>
						<li>Contact Us</li>
					</ul>
				</div>
			</div>
			<div className='speedy-copy'>&#169; 2023Speedy</div>
		</div>
	)
}
