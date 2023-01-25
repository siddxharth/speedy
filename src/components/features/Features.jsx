import React from 'react'
import './Features.css'
import bolt from './bolt.svg';
import psy from './psy.svg';
import tick from './tick.svg';

export default function Features() {
	return (
		<div className='features-section'>
			<div className="feature">
				<div className="feature-logo"><img src={bolt} alt="bolt" /></div>
				<div className='feature-title'>Incredibly Fast</div>
				<div className='feature-description'>Drastically reduce the time taken to spin up content, get going in a matter of hours instead of days.</div>
			</div>
			<div className="feature">
				<div className="feature-logo"><img src={psy} alt="psy" /></div>
				<div className='feature-title'>Zero-Prompt</div>
				<div className='feature-description'>No more messy prompts that take a lot of effort to write. Choose your keywords and let Speedy take care of the rest.</div>
			</div>
			<div className="feature">
				<div className="feature-logo"><img src={tick} alt="tick" /></div>
				<div className='feature-title'>Personalized Templates</div>
				<div className='feature-description'>Choose from a wide array of templates, personalized to meet your needs.</div>
			</div>
		</div>
	)
}
