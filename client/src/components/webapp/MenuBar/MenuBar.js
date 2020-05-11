import React from 'react';
import { Link } from 'react-router-dom';
import './menubar.css';

const MenuBar = () => {
	return (
		<main className='menuNav'>
			<div className='d-block text-right'>
				{' '}
				<i className='fas fa-bars hamburger fa-2x'></i>
			</div>

			<div className='d-flex flex-column menuList'>
				<li className='d-block menuItem'>
					<Link to='/sales-pitch'>
						{' '}
						<i className='fas fa-bars hamburger'></i> &nbsp; Sales Pitch{' '}
					</Link>
				</li>
				<li className='d-block menuItem'>
					<Link to='/inbound'>
						{' '}
						<i className='fas fa-bars hamburger'></i> &nbsp; Inbound
					</Link>
				</li>
				<li className='d-block menuItem'>
					<Link to='/storage/admin'>
						{' '}
						<i className='fas fa-bars hamburger'></i> &nbsp; Storage Admin
					</Link>
				</li>
				<li className='d-block menuItem'>
					<Link to='/report'>
						{' '}
						<i className='fas fa-bars hamburger'></i> &nbsp; Report
					</Link>
				</li>
				<li className='d-block menuItem'>
					<Link to='/access'>
						{' '}
						<i className='fas fa-bars hamburger'></i> &nbsp; Access Control{' '}
					</Link>
				</li>
			</div>
		</main>
	);
};

export default MenuBar;
