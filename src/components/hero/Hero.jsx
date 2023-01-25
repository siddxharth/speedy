import React from 'react'
import './Hero.css'
import hero_img from './Hero.svg';

export default function Hero() {
	return (
		<div className='hero-section'>
			<div className='hero-text'>
				<div className="hero-title">Boost your content creation with <span id='speedy'>Speedy</span></div>
				<div className="hero-description">Create content within a few minutes with <span id='speedy'>Speedy’s</span> one-stop digital branding solution for SMB.</div>
				<button className="hero-button">Get Started</button>
			</div>
			<div className="hero-img"><img src={hero_img} /></div>
		</div>
	)
}
