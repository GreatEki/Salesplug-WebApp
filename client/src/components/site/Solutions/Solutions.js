import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './solutions.css';

const Solutions = () => {
	return (
		<div className='wrapper'>
			<Navbar />
			<div className='container-fluid solutionsBanner'>
				<p> Sales Management Web Application</p>
				<h5> Improve the sales experience of your business</h5>

				<div className='d-flex flex-row'>
					<div className='marginY-2'>
						<Link to='/' className='btn-bg-primary'>
							Get Started
						</Link>
					</div>
					<div className='marginY-2'>
						<Link to='/' className='btn-white-bg'>
							Login
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Solutions;
