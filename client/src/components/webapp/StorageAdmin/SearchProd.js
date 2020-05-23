import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import NavTab from '../Report/NavTab';
import { StorageAdminContext } from '../../../contexts/StorageAdminContext';

const SearchProd = () => {
	const { searchProduct, value, setValue, product } = useContext(
		StorageAdminContext
	);
	return (
		<div>
			<div className='row'>
				<section className='col-md-2 p-0'>
					<MenuBar />
				</section>

				{/* Main Content of Component Starts Here */}
				<main className='col-md-10'>
					<h2 className='pageTitle p-4'> Search </h2>
					<NavTab />

					<section className='d-flex flex-row p-4'>
						<button className='btn btn-info mr-5 rounded-0'> Refresh </button>

						<div className='input-group w-25'>
							<input
								onChange={(e) => setValue(e.target.value)}
								value={value}
								className='form-control'
								type='text'
								placeholder='Search Product'
							/>

							<div className='input-group-prepend'>
								<button
									onClick={(e) => searchProduct(e, value)}
									className='input-group-text'>
									{' '}
									@{' '}
								</button>
							</div>
						</div>
					</section>

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

							{product.map((prod) => {
								return (
									<Link
										to={`/inbound/add-qty/${prod.id}`}
										className='row productListing p-2 '
										key={prod.id}>
										<div className='col-2'>
											<li>
												<span to='/inbound/add-qty'> {prod.id} </span>
											</li>
										</div>
										<div className='col-3'>
											<li>
												<span to='/inbound/add-qty'> {prod.name}</span>
											</li>
										</div>
										<div className='col-3'>
											<li>
												<span to='/inbound/add-qty'> {prod.category}</span>
											</li>
										</div>
										<div className='col-2'>
											<li className='text-center'>
												<span to='/inbound/add-qty'> {prod.consumable} </span>
											</li>
										</div>
										<div className='col-2'>
											<li className='text-center'>
												<span to='/inbound/add-qty'> {prod.currentQty} </span>
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
				{/*  End of Main Content of Component */}
			</div>
		</div>
	);
};

export default SearchProd;
