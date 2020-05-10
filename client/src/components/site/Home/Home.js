import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
	return (
		<div className='wrapper'>
			<Navbar />

			<div className='container-fluid banner-1'>
				<div className='pandemic'>
					<h2>
						<i className='fas fa-user-shield text-primary'></i> &nbsp; Remember
						to adhere to social distancing guidelines during the covid-19
						pandemic
					</h2>
				</div>
				<div className='intro'>
					<h1 className='banner-txt'> The Smart way to manage Sales</h1>
					<h1 className='banner-txt'> The Front to Back of Retail</h1>
					<h1 className='banner-txt'> #No.1 Sales Manager</h1>

					<div>
						<button className='btn btn-sm start-btn'> Get Started </button>
					</div>
				</div>

				<div className='banner-base'>
					<h4> The #1st Choice Retail Manager for Millenial Enterprises</h4>
				</div>
			</div>

			<div className='container section-2'>
				<h5> Adjustable, Adaptable to suit various retail needs</h5>

				<div className='d-flex flex-md-row flex-column justify-content-between px-5 py-5'>
					<div className='card mt-3 mr-lg-3'>
						<i className='fas fa-adjust fa-4x text-center'></i>
						<p className='text-center'> Adaptable </p>
						<span className='text-center py-2 px-md-5'>
							Sensitive and responsive to different nature of retail businesses{' '}
						</span>
						<button className='rounded-0 my-5 section2-btn'>
							{' '}
							Learn More>{' '}
						</button>
					</div>
					<div className='card mt-3 mr-lg-3'>
						<i className='fas fa-wrench fa-4x text-center'></i>
						<p className='text-center'> Adjustable </p>
						<span className='text-center py-2 px-md-5'>
							{' '}
							Customisable to suit operational activites{' '}
						</span>
						<button className='rounded-0 my-5 section2-btn'>
							{' '}
							Learn More>{' '}
						</button>
					</div>
					<div className='card mt-3 mr-lg-3'>
						<i className='fas fa-cog text-center fa-4x'></i>
						<p className='text-center'> Service </p>
						<span className='text-center py-2 px-md-5'>
							{' '}
							Efficient Solutions to inhibitions of data integrity and data flow
						</span>
						<button className='rounded-0 my-5 section2-btn'>
							{' '}
							Learn More>{' '}
						</button>
					</div>
				</div>
			</div>

			<section>
				<div className='section-3 px-5 container'>
					<div className='d-flex flex-md-row flex-column justify-content-between px-md-5'>
						<div className='mr-md-5'>
							<img
								src='/webImages/counter.jpg'
								className='counter-img img-fluid'
								alt='counter-img'
							/>
						</div>

						<div className='flex-fill pb-md-5'>
							<h5> Designed for Start-ups and SMEs</h5>

							<p>
								{' '}
								Just get the code and sit tight, you will witness its power and
								performance in lead generations. Its simple and yet powerful and
								productive technology. Experience then believe
							</p>

							<li> Explore solutions butilt to help every business.</li>
							<li> Repeat the same with another one</li>
							<li> Complete the list with the last.</li>
						</div>
					</div>
				</div>
				<div className='section-3 px-5 container'>
					<div className='d-flex flex-md-row flex-column justify-content-between px-md-4'>
						<div className='flex-fill pb-md-5 mr-md-5'>
							<h4>
								{' '}
								Process Integration and Data Digitization of sales, storage and
								retail enterprises.
							</h4>

							<p>
								{' '}
								Just get the code and sit tight, you will witness its power and
								performance in lead generations. Its simple and yet powerful and
								productive technology. Experience then believe
							</p>

							<li> SMEs and LEs</li>
							<li> Study growth pattern </li>
							<li> Hands on Data and Information </li>
						</div>

						<div className='mr-md-5'>
							<img
								src='/webImages/campaign.jpg'
								className='counter-img img-fluid'
								alt='counter-img'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='trial'>
				<div className='container'>
					<h5> Sell faster and smarter with the world’s #1 retail platform.</h5>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Home;
