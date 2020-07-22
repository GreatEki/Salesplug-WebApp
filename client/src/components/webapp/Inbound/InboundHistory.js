import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import { InboundContext } from '../../../contexts/InboundContext';
import { AuthContext } from '../../../contexts/AuthContext';

const InboundHistory = () => {
	const {
		getInboundHistoryforSupMarket,
		inboundHistoryProduct,
		userDept,
	} = useContext(InboundContext);

	const { authenticatedUser } = useContext(AuthContext);

	useEffect(() => {
		getInboundHistoryforSupMarket(authenticatedUser.dept);
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			<div className='row'>
				<section className='col-md-2'>
					<MenuBar />
				</section>

				{/* ===== Main Content of Component Starts Here ===== */}
				<main className='col-md-10'>
					<h2 className='pageTitle p-4'> Inbound History </h2>

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

					{/* ====== Page Body ===== */}

					<div className='pageBody p-0'>
						<small className='text-info ml-2 d-inline'>
							{' '}
							Click on item to inbound{' '}
						</small>
						<Link to='/inbound/history' className='text-info ml-5 d-inline'>
							<small>View Inbound History</small>
						</Link>
						<hr />

						<section className='row p-2 m-1 titleBar bg-light'>
							<div className='col-1'>
								<p> Item ID</p>
							</div>
							<div className='col-2'>
								<p> Item Name</p>
							</div>
							<div className='col-2'>
								<p> Item Category</p>
							</div>
							<div className='col-1'>
								<p className='text-center'> Before INB</p>
							</div>
							<div className='col-1 ml-4'>
								<p className='text-right'> Qty INB </p>
							</div>
							<div className='col-2'>
								<p className='text-right'> INB BY </p>
							</div>
							<div className='col-2'>
								<p className='text-right'> INB DATE </p>
							</div>
						</section>
						<hr />

						<div className='productListWrap scrollable-child p-2 m-1'>
							{/* ======================= Product Listing =========================== */}

							{inboundHistoryProduct.map((prod) => {
								return (
									<Link
										to={`/inbound/add-qty/${prod.id}`}
										className='row productListing p-2 '
										key={prod.id}>
										<div className='col-1'>
											<li>
												<span to='/inbound/add-qty'> {prod.productId} </span>
											</li>
										</div>
										<div className='col-2'>
											<li>
												<span to='/inbound/add-qty' className='text-wrap'>
													{' '}
													{prod.productName}
												</span>
											</li>
										</div>
										<div className='col-2'>
											<li>
												<span to='/inbound/add-qty' className='text-wrap'>
													{' '}
													{prod.productCategory}
												</span>
											</li>
										</div>
										<div className='col-1'>
											<li className='text-center'>
												<span to='/inbound/add-qty'> {prod.existingQty} </span>
											</li>
										</div>
										<div className='col-2'>
											<li className='text-center'>
												<span to='/inbound/add-qty'> {prod.inboundedQty} </span>
											</li>
										</div>
										<div className='col-2'>
											<li className='text-center'>
												<span to='/inbound/add-qty'> {prod.Personnel} </span>
											</li>
										</div>
										<div className='col-2'>
											<li className='text-center'>
												<small to='/inbound/add-qty' className='date'>
													{' '}
													{prod.Date}{' '}
												</small>
											</li>
										</div>
									</Link>
								);
							})}

							{/* ================= End of Product Listing =========================== */}
						</div>
					</div>

					{/* ===== End of PAge Body ===== */}
				</main>
				{/* ===== End of Main Content of Component ===== */}
			</div>
		</div>
	);
};

export default InboundHistory;
