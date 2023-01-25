import React from 'react'
import user from './user.svg';
import location from './location.svg';
import server from './server.svg';
import './Demographics.css';

export default function Demographics() {
	return (
		<div className='demographic-section'>
			<div className='demographic-content'>
				<img src={user} alt='User' />
				<div className='demographic-text'>
					<div className='demographic-title'>900+</div>
					<div className='demographic-sub'>Users</div>
				</div>
			</div>
			<div className='demographic-content'>
				<img src={location} alt='Location' />
				<div className='demographic-text'>
					<div className='demographic-title'>30+</div>
					<div className='demographic-sub'>Locations</div>
				</div>
			</div>
			<div className='demographic-content'>
				<img src={server} alt='Server' />
				<div className='demographic-text'>
					<div className='demographic-title'>50+</div>
					<div className='demographic-sub'>Servers</div>
				</div>
			</div>
		</div>
	)
}
