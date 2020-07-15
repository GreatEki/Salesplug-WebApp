import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './products.css';

const Products = () => {
	return (
		<div className='wrapper'>
			<Navbar />

			<section className='container-fluid product-banner'>
				<div className='pandemic'>
					<h2>
						<i className='fas fa-user-shield text-primary'></i> &nbsp; Remember
						to adhere to social distancing guidelines during the covid-19
						pandemic
					</h2>
				</div>

				<div className='definitionText'>
					<h5> What is Salesplug? </h5>

					<p>
						{' '}
						Salesplug is a technological solution to business activities. It is
						a sales activity management application. We help your sales,
						commerce, inventory, procurement process — ensuring proper data
						documentation, integrity and accuracy.
					</p>
				</div>
			</section>

			<section className='container-fluid m-0'>
				<div className='container container-1 x-center marginTop-10'>
					<p className='cap4'> What does Salesplug do? </p>

					<h6>
						{' '}
						We brign the advantage of cloud solutions to businesses of various
						size.
					</h6>

					<p class='text-normal'>
						{' '}
						Salesplug unites your sales, commerce, inventory, procurement
						process — enforcing data integrity and accuracy. We provide a way
						for start-ups to have the edge that digital cloud solutions bring to
						modern businesses
					</p>

					<div className='marginY-2'>
						<Link to='/' className='getStarted-btn'>
							Get Started
						</Link>
					</div>
				</div>
			</section>

			<section className='container  container-1 marginY-2'>
				<p className='cap4'> Benefits of Salesplug </p>

				<div className='flex-row highlights marginY-2'>
					<img
						src='/webImages/search-lens.jpg'
						alt='prop
                    '
					/>

					<div>
						<p>
							Sensitive and responsive to different nature of retail businesses{' '}
						</p>
						<p> LEARN MORE </p>
					</div>
				</div>

				<div className='flex-row highlights marginY-2'>
					<img
						src='/webImages/wrench-icon.jpg'
						alt='prop
                    '
					/>
					<div>
						<p>Customisable to suit operational activites </p>

						<p> LEARN MORE </p>
					</div>
				</div>

				<div className='flex-row highlights marginY-2'>
					<img
						src='/webImages/settings-icon.png'
						alt='prop
                    '
					/>
					<div>
						<p>
							Efficient Solutions to inhibitions of data integrity and data flow
						</p>

						<p> LEARN MORE </p>
					</div>
				</div>
				<div className='flex-row highlights marginY-2'>
					<img
						src='/webImages/thunder-icon.png'
						alt='prop
                    '
					/>
					<div>
						<p>Go digital fast and empower your teams to work from anywhere.</p>

						<p> LEARN MORE </p>
					</div>
				</div>
			</section>

			<section className='container-fluid m-0'>
				<section className='container container-1 x-center'>
					<p className='cap4'> What does Salesplug Stand For? </p>

					<h6> Our core values help make Salesforce a platform for change.</h6>

					<p class='text-normal'>
						{' '}
						Ever since the conception of salesplug, we've believed that doing
						well as a company means doing good in the world. That's why we've
						committed our time, equity, and products to improving education,
						equality, and the environment for everyone.
					</p>

					<div className='marginY-2'>
						<Link to='/' className='montserrat'>
							LEARN MORE ABOUT OUR VALUES &gt;
						</Link>
					</div>
				</section>
			</section>

			<section className='container-fluid'>
				<div className='companies container container-1'>
					<h5>
						{' '}
						Over 100 startups, small and big companies are growing their
						business with Salesplug
					</h5>

					<div className='flex-row p-5'>
						<img
							src='/webImages/brunello.png'
							alt='prop'
							className='company-img'
						/>
						<img src='/webImages/bbva.png' alt='prop' className='company-img' />
						<img
							src='/webImages/unilever.png'
							alt='prop'
							className='company-img'
						/>
						<img src='/webImages/humu.png' alt='prop' className='company-img' />
						<img
							src='/webImages/t-mobile.png'
							alt='prop'
							className='company-img'
						/>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Products;
