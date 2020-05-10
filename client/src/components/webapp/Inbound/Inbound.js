import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import { Link } from 'react-router-dom';
import './inbound.css';

const Inbound = () => {
	return (
		<div>
			<div className='row'>
				{/* =====  MenuBar =====  */}
				<section className='col-md-2 p-0'>
					<MenuBar />
				</section>
				{/* ===== End of Menu Bar ===== */}

				{/* Main Content of Component */}
				<section className='col-md-10 p-0'>
					<h2 className='pageTitle p-4'> Inbound</h2>
					{/* ===== Header ===== */}
					<header className='d-flex flex-row p-4'>
						<button className='btn btn-info mr-5 rounded-0'> Refresh </button>

						<div className='input-group w-25'>
							<input
								className='form-control'
								type='text'
								placeholder='Search Product'
							/>

							<div className='input-group-prepend'>
								<span className='input-group-text'> @ </span>
							</div>
						</div>
					</header>
					{/* ===== End of Header ===== */}

					{/* ====== Page Body ===== */}

					<div className='pageBody p-0'>
						<small className='text-info ml-2'> Click on item to inbound </small>
						<hr />
						<section className='row p-2 m-1 titleBar bg-light'>
							<div className='col-2'>
								<p> Item ID</p>
							</div>
							<div className='col-3'>
								<p> Item Name</p>
							</div>
							<div className='col-3'>
								<p> Item Category</p>
							</div>
							<div className='col-2'>
								<p> Consumable</p>
							</div>
							<div className='col-2'>
								<p> Qty in Stock</p>
							</div>
						</section>
						<hr />

						<div className='productListWrap scrollable-child p-2 m-1'>
							{/* ======================= Product Listing =========================== */}
							<Link to='/inbound/add-qty' className='row productListing p-2 '>
								<div className='col-2'>
									<li>
										<Link to='/inbound/add-qty'> 100 </Link>
									</li>
								</div>
								<div className='col-3'>
									<li>
										<Link to='/inbound/add-qty'> Pears Baby Lotion </Link>
									</li>
								</div>
								<div className='col-3'>
									<li>
										<Link to='/inbound/add-qty'> Skin Care and Cosmetics </Link>
									</li>
								</div>
								<div className='col-2'>
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
					</div>
					{/* ===== End of PAge Body ===== */}
				</section>
				{/* End of Main Content of Component */}
			</div>
		</div>
	);
};

export default Inbound;
