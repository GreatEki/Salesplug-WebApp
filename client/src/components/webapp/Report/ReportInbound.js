import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import NavTab from './NavTab';
import { ReportContext } from '../../../contexts/ReportContext';

const ReportInbound = () => {
	const {
		setChosenDept,
		chosenDept,
		inboundsByDept,
		filteredProducts,
	} = useContext(ReportContext);

	let history = useHistory();

	// useEffect function to run with change in state to chosenDept
	useEffect(() => {
		inboundsByDept(chosenDept);

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [chosenDept]);
	return (
		<div>
			<div className='row'>
				<section className='col-md-2 p-0'>
					<MenuBar />
				</section>
				<section className='col-md-10'>
					<h2 className='pageTitle p-4'> Inbound Report </h2>
					<NavTab />

					{/* Filter Bar */}
					<div className='d-flex flex-row'>
						<small className='text-info ml-2 p-2'> Inbound Records </small>

						<section className='ml-4 p-2 form-group'>
							<label htmlFor='dept_filt'> Filter by Dept: </label>
							&nbsp;
							<select
								className='form-control'
								onChange={(e) => setChosenDept(e.target.value)}
								value={chosenDept}>
								<option value='nill'> Select Dept</option>
								<option value='SuperMarket'> SuperMarket</option>
								<option value='Pharmacy'> Pharmacy</option>
								<option value='Gadgets'> Gadgets</option>
								<option value='Health and Fitness'> Health and Fitness</option>
								<option value='Fashion'> Fashion</option>
							</select>
						</section>

						<section className='ml-4 p-2 d-flex flex-row'>
							<span htmlFor='dept_filt'> Filter by Date: </span>
							&nbsp;
							<div className='form-group mr-4'>
								<label className='form-control' htmlFor='start_date'>
									{' '}
									Start Date{' '}
								</label>
								<select className='form-control'>
									<option> Wed, May 13, 2020</option>
									<option> Wed, May 13, 2020</option>
									<option> Wed, May 13, 2020</option>
								</select>
							</div>
							<div className='form-group'>
								<label className='form-control' htmlFor='end_date'>
									{' '}
									End Date{' '}
								</label>
								<select className='form-control'>
									<option> Wed, May 13, 2020</option>
									<option> Wed, May 13, 2020</option>
									<option> Wed, May 13, 2020</option>
								</select>
							</div>
						</section>
					</div>

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
						{filteredProducts.map((rec, index) => {
							return (
								<Link to='#' className='row productListing p-2 ' key={index}>
									<div className='col-1'>
										<li>
											<span to='/inbound/add-qty'> {rec.productId} </span>
										</li>
									</div>
									<div className='col-2'>
										<li>
											<span to='/inbound/add-qty' className='text-wrap'>
												{' '}
												{rec.productName}
											</span>
										</li>
									</div>
									<div className='col-2'>
										<li>
											<span to='/inbound/add-qty' className='text-wrap'>
												{' '}
												{rec.productCategory}
											</span>
										</li>
									</div>
									<div className='col-1'>
										<li className='text-center'>
											<span to='/inbound/add-qty' className='text-danger'>
												{' '}
												{rec.existingQty}{' '}
											</span>
										</li>
									</div>
									<div className='col-2'>
										<li className='text-center'>
											<span to='/inbound/add-qty' className='text-success'>
												{' '}
												{rec.inboundedQty}{' '}
											</span>
										</li>
									</div>
									<div className='col-2'>
										<li className='text-center'>
											<span to='/inbound/add-qty'> {rec.Personnel} </span>
										</li>
									</div>
									<div className='col-2'>
										<li className='text-center'>
											<small to='/inbound/add-qty' className='date'>
												{' '}
												{rec.Date}{' '}
											</small>
										</li>
									</div>
								</Link>
							);
						})}

						{/* ================= End of Product Listing =========================== */}
					</div>
				</section>
			</div>
		</div>
	);
};

export default ReportInbound;
