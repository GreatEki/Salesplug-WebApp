import React from 'react';
import './auth.css';
import { Link } from 'react-router-dom';

const Auth = () => {
	return (
		<div className='login-wrapper container-fluid'>
			<div className='row'>
				<section className='side-left full-height col-12 col-lg-6 '>
					<img
						src='/webImages/salesplug-logo.png'
						alt='logo'
						className='d-block'
					/>
					<div className='card bg-white'>
						<form className='form px-4 pt-4'>
							<div className='form-group'>
								<label htmlFor='username' className='label'>
									{' '}
									Username
								</label>

								<input type='text' name='username' className='form-control' />
							</div>
							<div className='form-group'>
								<label htmlFor='password' className='label'>
									{' '}
									Password
								</label>

								<input
									type='password'
									name='password'
									className='form-control'
								/>
							</div>

							<div className='form-group'>
								<input
									type='checkbox'
									ClassName='form-check-input'
									name='keepMeSignedIn'
								/>
								<label htmlFor='keepMeSignedIn' className='text-muted'>
									&nbsp; Keep me Signed In?{' '}
								</label>
							</div>

							<div className='form-group'>
								<button className='btn btn-block siteBtn'> Enter</button>
							</div>
						</form>

						<Link to='/' className='px-4'>
							{' '}
							Forgot Password?{' '}
						</Link>
					</div>
					<p className='text-white text-center'>
						&copy; 2020 salesplug.com, inc. All rights reserved. | Privacy
					</p>
				</section>
				<section className='side-right col-lg-6 col-12'>
					<h5> Image Section</h5>
				</section>
			</div>
		</div>
	);
};

export default Auth;
