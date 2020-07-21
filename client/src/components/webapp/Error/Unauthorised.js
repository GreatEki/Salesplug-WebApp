import React from 'react';
import { Link } from 'react-router-dom';
import './unauthorised.css';

const Unauthorised = () => {
	return (
		<div className='container-fluid'>
			<div className='unauthorisedBlock'>
				<h1> 401 Error</h1>

				<p>Sorry it seems you do not have the permissions to view this page </p>

				<p> Kindly Contact your IT Administrator</p>

				<Link to='/sales-pitch'> Go to Home</Link>
			</div>
		</div>
	);
};

export default Unauthorised;
