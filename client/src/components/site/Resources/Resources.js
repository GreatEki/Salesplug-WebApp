import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './resources.css';

const Resources = () => {
	return (
		<div className='wrapper'>
			<Navbar />
			<section className='container-fluid resourcesBlock-1'>
				<div className='pandemic'>
					<h2>
						<i className='fas fa-user-shield text-primary'></i> &nbsp; Remember
						to adhere to social distancing guidelines during the covid-19
						pandemic
					</h2>
				</div>
				<section className='row'>
					<div className='col-md-6 col-sm-12'>
						<small>Resources</small>
						<h4> COVID-19 HEALTH TIPS</h4>
						<p> What you need to know to stay safe.</p>
						<div className='imageBox'>
							<Link to='#'>
								<img src='/webImages/healthcare.jpg' alt='prop' />
							</Link>
						</div>
					</div>

					<div className='col-md-6 col-sm-12 flex'>
						<Link to='#' className=' imageFlex'>
							<img src='/webImages/sales-expert.jpg' alt='prop' />
							<h5> Get Insights from Leading Sales Experts</h5>
						</Link>
						<Link to='#' className=' imageFlex'>
							<img src='/webImages/retail.png' alt='prop' />
							<h5> Explore resource to boost e-commerce</h5>
						</Link>
						<Link to='#' className=' imageFlex'>
							<img src='/webImages/nesa.jpg' alt='prop' />
							<h5> IT and App Development</h5>
						</Link>
					</div>
				</section>
			</section>

			<section className='container-fluid resourcesBlock-Two'>
				<div className='container'>
					<h1 className='pl-4'>
						{' '}
						Discover featured resource on the various topics
					</h1>

					<div className='flex'>
						<div className='card'>
							<img
								className='card-image'
								src='/webImages/client-engagement.jpg'
								alt='prop'
							/>
							<div className='card-body'>
								<p> Client Engagement</p>
								<h6>
									{' '}
									Boost engagement by delivering the experience your client's
									want.
								</h6>
							</div>
							<Link to='#' className='Link'>
								{' '}
								Learn More &gt;
							</Link>
						</div>
						<div className='card'>
							<img
								className='card-image'
								src='/webImages/artificial-intelligence.jpg'
								alt='prop'
							/>
							<div className='card-body'>
								<p> Artificial Intelligence</p>
								<h6>
									{' '}
									Unify various aspects of your business with digital solutions
								</h6>
							</div>
							<Link to='#' className='Link'>
								{' '}
								Learn More &gt;
							</Link>
						</div>
						<div className='card'>
							<img
								className='card-image'
								src='/webImages/meeting.jpg'
								alt='prop'
							/>
							<div className='card-body'>
								<p> Digital Transformation</p>
								<h6> Do more for Less with AI</h6>
							</div>
							<Link to='#' className='Link'>
								{' '}
								Learn More &gt;
							</Link>
						</div>
						<div className='card'>
							<img
								className='card-image'
								src='/webImages/future.jpg'
								alt='prop'
							/>
							<div className='card-body'>
								<p> Future Jobs</p>
								<h6> Setting your workforce for the future.</h6>
							</div>
							<Link to='#' className='Link'>
								{' '}
								Learn More &gt;
							</Link>
						</div>
						<div className='card'>
							<img
								className='card-image'
								src='/webImages/leading.jpg'
								alt='prop'
							/>
							<div className='card-body'>
								<p> Leadership</p>
								<h6> Leading in Todays world.</h6>
							</div>
							<Link to='#' className='Link'>
								{' '}
								Learn More &gt;
							</Link>
						</div>
						<div className='card'>
							<img
								className='card-image'
								src='/webImages/media.jpg'
								alt='prop'
							/>
							<div className='card-body'>
								<p> Media</p>
								<h6> Impactful Journalism for Change</h6>
							</div>
							<Link to='#' className='Link'>
								{' '}
								Learn More &gt;
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className='container-fluid resourcesBlock-Two fadedWhite'>
				<div className='container'>
					<h1 className='pl-4'> Find Resources related to your role.</h1>

					<div className='flex'>
						<div className='card'>
							<img
								className='card-image'
								src='/webImages/customer-service.jpg'
								alt='prop'
							/>
							<div className='card-body'>
								<p> Customer Service</p>
								<h6>
									{' '}
									Keeping customer satisfaction with efficient customer service
									delivery.
								</h6>
							</div>
							<Link to='#' className='Link'>
								{' '}
								Learn More &gt;
							</Link>
						</div>
						<div className='card'>
							<img
								className='card-image'
								src='/webImages/marketing.jpg'
								alt='prop'
							/>
							<div className='card-body'>
								<p> Marketing </p>
								<h6> Increase product and service awareness.</h6>
							</div>
							<Link to='#' className='Link'>
								{' '}
								Learn More &gt;
							</Link>
						</div>
						<div className='card'>
							<img
								className='card-image'
								src='/webImages/entrepreneur.jpg'
								alt='prop'
							/>
							<div className='card-body'>
								<p> Entrepreneurship</p>
								<h6>
									{' '}
									Transform your business with innovative Entrepreneurship{' '}
								</h6>
							</div>
							<Link to='#' className='Link'>
								{' '}
								Learn More &gt;
							</Link>
						</div>
						<div className='card'>
							<img
								className='card-image'
								src='/webImages/fitness.jpg'
								alt='prop'
							/>
							<div className='card-body'>
								<p> Health and Fitness</p>
								<h6> Acquaint yourself with tips for healthy living</h6>
							</div>
							<Link to='#' className='Link'>
								{' '}
								Learn More &gt;
							</Link>
						</div>
						<div className='card'>
							<img
								className='card-image'
								src='/webImages/programmer.jpg'
								alt='prop'
							/>
							<div className='card-body'>
								<p> Software Development</p>
								<h6> Keeping up with the ever changing world of software.</h6>
							</div>
							<Link to='#' className='Link'>
								{' '}
								Learn More &gt;
							</Link>
						</div>
						<div className='card'>
							<img
								className='card-image'
								src='/webImages/campaign.jpg'
								alt='prop'
							/>
							<div className='card-body'>
								<p> Data Analyst</p>
								<h6> Leading transformation with numbers.</h6>
							</div>
							<Link to='#' className='Link'>
								{' '}
								Learn More &gt;
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className='container-fluid resourcesBlock-Four'>
				<div className='container'>
					<div className='imageBox'>
						<img src='/webImages/cartoon.jpg' alt='prop' />
					</div>

					<div className='div1 '>
						<h2 className='text-center'>
							{' '}
							Subscribe to get frequent updates in your inbox.
						</h2>

						<div className='form '>
							<input
								type='text'
								className='p-2'
								placeholder='type your email here'
							/>

							<button> SUBSCRIBE </button>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Resources;
