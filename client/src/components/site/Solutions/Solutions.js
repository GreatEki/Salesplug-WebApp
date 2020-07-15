import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './solutions.css';

const Solutions = () => {
	return (
		<div className='wrapper'>
			<Navbar />
			<section className='container-fluid solutionsBanner'>
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
			</section>

			<section className='container-fluid section2'>
				<div className='container'>
					<h6>
						{' '}
						Investing in software could bring a significant difference to your
						business.{' '}
					</h6>

					<div className='flexRow'>
						<div className='imageBox marginY-2'>
							<img src='/webImages/campaign.jpg' alt='prop' />
						</div>

						<div className='textBlock'>
							<h5>
								{' '}
								A business sofware app helps you work smarter, not harder
							</h5>

							<p>
								{' '}
								Many business owners are afraid of adding expenses and more
								tasks without much yield. But if you could find a new tool that
								would save you time, help you do a better job, and give you
								metrics that could help you grow would it make you happy? A
								small business sales app is ideal for small to medium companies
								because it helps you streamline your day and effectively plan
								the next one, too. With quick and easy steps that will help you
								both today and in the future, you'll quickly see that the right
								software can help you grow.{' '}
							</p>

							<div className='marginY-2'>
								<Link to='/' className='btn-bg-primary'>
									Get Started
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='container-fluid'>
				<div className='container'>
					<div className='flexRow'>
						<div className='imageBox marginY-2'>
							<img src='/webImages/phonemaps.jpg' alt='prop' />
						</div>

						<div className='textBlock'>
							<h5> Enhance your business process and save time.</h5>

							<p>
								{' '}
								helps you save time spinning your wheels trying to keep track of
								everything. It helps you see and manage your pipeline more
								effectively. Try it today. Just sign up to get started with
								Salesplug
							</p>

							<div className='imageBox marginY-2'>
								<img src='/webImages/phonemap2.png' alt='prop' />
							</div>

							<h5> A business solution for everyone all around the world</h5>
						</div>
					</div>
				</div>
			</section>

			<section className='container-fluid section3'>
				<div className='container'>
					<h5 className='smallCap'> FREE YOUR MIND </h5>
					<h5 className='midCap'> Gain far more than capital</h5>

					<p className='para'>
						Salesplug offers their portfolio companies access to Salesplug
						advisory services to ensure success. They leverage the expertise of
						our leadership in cloud computing to help you build credibility and
						accelerate growth.
					</p>

					<div className='flexRow'>
						<div className='card'>
							<i className='text-center far fa-check-circle fa-4x'></i>
							<h6> Data Accuracy </h6>

							<p>
								{' '}
								Inadequate information leads to inaccurate sales forecasts.
								Great sales management software records data efficiently and
								provides important information that makes it easy for
								salespeople to make accurate forecasts.
							</p>
						</div>
						<div className='card'>
							<i className='text-center fab fa-teamspeak fa-4x'></i>
							<h6> Collaboration </h6>

							<p>
								Sales management software can summarize all the work done by
								your sales team and present that information in a way that
								enables everyone involved to understand what the team is doing
								as a whole.
							</p>
						</div>
						<div className='card'>
							<i class='text-center fas fa-poll fa-4x'></i>
							<h6> Trend Analysis </h6>

							<p>
								Since you have the ability to figure out the ROI gained from
								each lead source (e.g. from Google Ads, newsletters, SEO,
								telemarketing, etc.), you will be able to allocate most of your
								resources and money to the most useful and effective lead
								sources.
							</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Solutions;
