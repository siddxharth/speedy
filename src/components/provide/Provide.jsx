import React from 'react'
import tick from './tick.svg';
import person from './person.svg';
import './Provide.css';

export default function Provide() {
	return (
		<div className='provide-section'>
			<div className='provide-image'>
				<img src={person} alt="person" />
			</div>
			<div className="provide-content">
				<div className="provide-title">We Provide Many Features You Can Use</div>
				<div className="provide-sub">You can explore the features that we provide with fun and have their own functions each feature.</div>
				<div className="provide-list">
					<ul>
						<li><img src={tick} alt='tick' />Lorem Ipsum</li>
						<li><img src={tick} alt='tick' />Lorem Ipsum</li>
						<li><img src={tick} alt='tick' />Lorem Ipsum</li>
						<li><img src={tick} alt='tick' />Lorem Ipsum</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
