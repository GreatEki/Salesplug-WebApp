import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './support.css';
import Footer from '../Footer/Footer';

const Support = () => {
	return (
		<div className='wrapper'>
			<Navbar />
			<section className='supportBlock-1 container-fluid'>
				<div className='pandemic'>
					<h2>
						<i className='fas fa-user-shield text-primary'></i> &nbsp; Remember
						to adhere to social distancing guidelines during the covid-19
						pandemic
					</h2>
				</div>
				<div className='div2'>
					<h5> Get expert help to reach your goals faster.</h5>
					<div className='marginY-2 text-center'>
						<Link to='/' className='btn-bg-primary'>
							Let's Talk
						</Link>
					</div>
				</div>

				<div className='div3 flexRow'>
					<div className='Box'>
						<p> Get the right level of support every time</p>
						<p>
							<Link to='#' className='text-center'>
								{' '}
								LEARN MORE &gt;
							</Link>
						</p>
					</div>
					<div className='Box'>
						<p>Get strategic and technical guidance from Salesplug experts.</p>
						<p>
							<Link to='#' className='text-center'>
								{' '}
								LEARN MORE &gt;
							</Link>
						</p>
					</div>
					<div className='Box'>
						<p>
							{' '}
							Take advantage of the free resource available to every customer
						</p>
						<p>
							<Link to='#' className='text-center'>
								{' '}
								LEARN MORE &gt;
							</Link>
						</p>
					</div>
				</div>
			</section>

			<section className='supportBlock-2 container-fluid'>
				<div className='container'>
					<h1> What do you need to know to get started.</h1>

					<h5> Sales-certified experts can help</h5>

					<div className='div1'>
						<div className='card'> Get report on your org status </div>
						<div className='card'> Find answers to questions 24/7 </div>
						<div className='card'> Talk to a coach one-on-one </div>
						<div className='card'> Learn About Cloud Computing </div>
						{/* <div className='card'> Get Continual Guidance</div> */}
						<div className='card'> Learn About Sales </div>
						<div className='card'> Learn About Marketing</div>
						<div className='card'> Learn to Prepare a Business Plan</div>
						<div className='card'>
							{' '}
							Transform your business with web solutions
						</div>
					</div>
				</div>
			</section>

			<section className='container-fluid supportBlock-3'>
				<div className='container flexRow'>
					<div>
						<h1> Get the tools you need to reach your goals.</h1>

						<p>
							Whether you’re a self-guided learner or want some one-on-one
							support, we have a plan to help you succeed.
						</p>

						<Link to='#'> SEE VARIOUS PLANS &gt;</Link>
					</div>

					<div className=''>
						<img src='/webImages/success-plans.png' alt='prop' />
					</div>
				</div>
			</section>

			<section className='container-fluid supportBlock-4'>
				<div className='container'>
					<h2> See how we are impacting communities with tech</h2>

					<h5> SALESPLUG TRAININGS</h5>

					<div className='flexRow'>
						<div className='image'>
							<img src='/webImages/nesa.jpg' alt='prop' />
						</div>
						<div className='image'>
							<img src='/webImages/josiah-sarpong.jpg' alt='prop' />
						</div>
						<div className='image'>
							<img src='/webImages/josiah-sarpong-1.jpg' alt='prop' />
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Support;
