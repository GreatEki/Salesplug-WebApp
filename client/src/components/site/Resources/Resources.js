import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './resources.css';

const Resources = () => {
	return (
		<div className='wrapper'>
			<Navbar />
			<div className='container-fluid resourcesBlock-1'>
				<div className='pandemic'>
					<h2>
						<i className='fas fa-user-shield text-primary'></i> &nbsp; Remember
						to adhere to social distancing guidelines during the covid-19
						pandemic
					</h2>
				</div>
				<section className='row'>
					<div className='col-md-6'>
						<small>Resources</small>
						<h4> COVID-19 HEALTH TIPS</h4>
						<p> What you need to know to stay safe.</p>
						<div className='imageBox'>
							<Link to='#'>
								<img src='/webImages/healthcare.jpg' alt='prop' />
							</Link>
						</div>
					</div>

					<div className='col-md-6 flex'>
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
			</div>

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
							<Link className='Link'> Learn More &gt;</Link>
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
							<Link className='Link'> Learn More &gt;</Link>
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
							<Link className='Link'> Learn More &gt;</Link>
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
							<Link className='Link'> Learn More &gt;</Link>
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
							<Link className='Link'> Learn More &gt;</Link>
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
							<Link className='Link'> Learn More &gt;</Link>
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
							<Link className='Link'> Learn More &gt;</Link>
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
							<Link className='Link'> Learn More &gt;</Link>
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
							<Link className='Link'> Learn More &gt;</Link>
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
							<Link className='Link'> Learn More &gt;</Link>
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
							<Link className='Link'> Learn More &gt;</Link>
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
							<Link className='Link'> Learn More &gt;</Link>
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
							<input type='text' className='p-2' />

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
