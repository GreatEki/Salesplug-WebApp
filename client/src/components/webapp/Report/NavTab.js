import React from 'react';
import { Link } from 'react-router-dom';

const NavTab = () => {
	return (
		<div>
			<ul className='nav nav-tabs p-2'>
				<li className='nav-item'>
					<Link to='/report' className='nav-link active Abel'>
						{' '}
						Sales{' '}
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/report/inbound' className='nav-link Abel'>
						{' '}
						Inbound{' '}
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/storage/admin/new-product' className='nav-link Abel'>
						{' '}
						Add New Product{' '}
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/report/margin' className='nav-link Abel'>
						{' '}
						Margin{' '}
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavTab;
