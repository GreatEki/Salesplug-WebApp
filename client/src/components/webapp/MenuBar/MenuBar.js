import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './menubar.css';
import { AuthContext } from '../../../contexts/AuthContext';

const MenuBar = () => {
	const { signOutUser, getSignedInUser, authenticatedUser } = useContext(
		AuthContext
	);

	useEffect(() => {
		getSignedInUser();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { firstname, lastname } = authenticatedUser;

	return (
		<main className='menuNav'>
			<div className='d-block text-right'>
				{' '}
				<i className='fas fa-bars hamburger fa-2x'></i>
			</div>

			<div className='d-flex flex-column menuList'>
				<div>
					<p className='accountHolder'>
						{' '}
						Account:{' '}
						<span className='text-info'>
							{' '}
							{lastname} {firstname}{' '}
						</span>
					</p>
				</div>
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
				<li onClick={() => signOutUser()} className='d-block menuItem'>
					<Link to='#'>
						{' '}
						<i className='fas fa-bars hamburger'></i> &nbsp;{' '}
						<span className='signOut'> Sign Out </span>{' '}
					</Link>
				</li>
			</div>
		</main>
	);
};

export default MenuBar;
