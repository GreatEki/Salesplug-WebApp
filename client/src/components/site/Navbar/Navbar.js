import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StyleContext } from '../../../contexts/StyleContext';
import './navbar.css';

const Navbar = () => {
	const { closeSlideMenu, styles, openSlideMenu } = useContext(StyleContext);
	return (
		<>
			<div className='container-fluid'>
				<nav className='row nav'>
					<Link to='/' className='col-2 logo'>
						<img
							src='/webImages/salesplug-logo.png'
							alt='logo'
							className='site-logo'
						/>
					</Link>

					<div className='col-7 wrapper-nav-menu'>
						<ul className='navbar-menu'>
							<li>
								<Link to='/products' className='menu-item'>
									{' '}
									Product
								</Link>
							</li>
							<li>
								<Link to='/solutions' className='menu-item'>
									{' '}
									Solutions
								</Link>
							</li>
							<li>
								<Link to='/resources' className='menu-item'>
									{' '}
									Resources
								</Link>
							</li>
							<li>
								<Link to='/support' className='menu-item'>
									{' '}
									Support
								</Link>
							</li>
							{/* <li>
								<Link to='/' className='menu-item'>
									{' '}
									About Us
								</Link>
							</li> */}
						</ul>
					</div>

					<div className='col-3 pt-4 wrapper-nav-auth'>
						<div className='d-inline px-2'>
							<Link to='/' className='nav-auth'>
								{' '}
								<span> (234) 9019856761</span>&nbsp; Contact Us
							</Link>
						</div>{' '}
						<div className='d-inline px-2'>
							<Link to='/login' className='nav-auth'>
								<i className='fas fa-user'> </i> Login
							</Link>
						</div>
					</div>

					<span className='hamburger'>
						<Link to='/' onClick={() => openSlideMenu()}>
							<i className='fas fa-bars hamburger'></i>
						</Link>
					</span>
				</nav>

				<div
					id='side-menu'
					className='side-nav'
					style={{ width: styles.width }}>
					<Link to='/' className='btn-close' onClick={() => closeSlideMenu()}>
						&times;
					</Link>
					<Link to='/'>Products</Link>
					<Link to='/'>Solutions</Link>
					<Link to='/'>Events</Link>
					<Link to='/'>Support</Link>
					<Link to='/'>About Us</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
