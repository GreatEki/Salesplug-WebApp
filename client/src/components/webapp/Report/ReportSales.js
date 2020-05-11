import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import NavTab from './NavTab';

const ReportSales = () => {
	return (
		<div>
			<div className='row'>
				<section className='col-md-2 p-0'>
					<MenuBar />
				</section>

				{/* ===== Main Content of Component ===== */}
				<section className='col-md-10'>
					<h2 className='pageTitle p-4'> Sales Report </h2>
					<NavTab />

					<hr />
					<section className='row p-2 titleBar bg-light'>
						<div className='col-2'>
							<p> Time </p>
						</div>
						<div className='col-1'>
							<p> Item ID</p>
						</div>
						<div className='col-3'>
							<p> Item Name</p>
						</div>
						<div className='col-2'>
							<p> Item Category</p>
						</div>
						<div className='col-2'>
							<p className='text-center'> Quantity</p>
						</div>
						<div className='col-2'>
							<p className='text-center'> Price</p>
						</div>
					</section>
					<hr />

					<div className='productListWrap scrollable-child p-2'>
						{/* ======================= Product Listing =========================== */}
						<Link to='/inbound/add-qty' className='row productListing p-2'>
							<div className='col-2'>
								<li>
									<Link to='/inbound/add-qty'> 5/9/20 2:56pm </Link>
								</li>
							</div>
							<div className='col-1'>
								<li>
									<Link to='/inbound/add-qty'> 100 </Link>
								</li>
							</div>
							<div className='col-3'>
								<li>
									<Link to='/inbound/add-qty'> Pears Baby Lotion </Link>
								</li>
							</div>
							<div className='col-2'>
								<li>
									<Link to='/inbound/add-qty'> Skin Care and Cosmetics </Link>
								</li>
							</div>
							<div className='col-2 '>
								<li className='text-center'>
									<Link to='/inbound/add-qty'> No </Link>
								</li>
							</div>
							<div className='col-2'>
								<li className='text-center'>
									<Link to='/inbound/add-qty'> 20 </Link>
								</li>
							</div>
						</Link>

						{/* ================= End of Product Listing =========================== */}
					</div>

					<section className='pageBottom'>
						<div className='h-center w-25'>
							<h3>
								{' '}
								Total Sales: <del className='del'>N </del> 250, 000{' '}
							</h3>
						</div>
					</section>
				</section>
				{/*  ====== End of Main Content of Component ===== */}
			</div>
		</div>
	);
};

export default ReportSales;
