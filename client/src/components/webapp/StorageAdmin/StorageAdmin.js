import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import NavTab from '../Report/NavTab';
import { StorageAdminContext } from '../../../contexts/StorageAdminContext';

const StorageAdmin = () => {
	const { allProducts, getAllProducts } = useContext(StorageAdminContext);

	useEffect(() => {
		getAllProducts();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			<div className='row'>
				<section className='col-md-2 p-0'>
					<MenuBar />
				</section>

				{/* ===== Main Content of Component ===== */}
				<section className='col-md-10'>
					<h2 className='pageTitle p-4'> Storage Admin</h2>
					<NavTab />

					<section className='d-flex flex-row p-4'>
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
					</section>

					<hr />
					<section className='row ml-2 titleBar bg-light'>
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

						{allProducts.map((prod, index) => (
							<Link
								to='/inbound/add-qty'
								className='row productListing p-2 '
								key={index}>
								<div className='col-2'>
									<li>
										<Link to='/inbound/add-qty'> {prod.id} </Link>
									</li>
								</div>
								<div className='col-3'>
									<li>
										<Link to='/inbound/add-qty'> {prod.name} </Link>
									</li>
								</div>
								<div className='col-3'>
									<li>
										<Link to='/inbound/add-qty'> {prod.category} </Link>
									</li>
								</div>
								<div className='col-2'>
									<li className='text-center'>
										<Link to='/inbound/add-qty'> {prod.consumable} </Link>
									</li>
								</div>
								<div className='col-2'>
									<li className='text-center'>
										<Link to='/inbound/add-qty'> {prod.currentQty} </Link>
									</li>
								</div>
							</Link>
						))}

						{/* ================= End of Product Listing =========================== */}
					</div>
				</section>

				{/* ===== End of Main Content of Component ===== */}
			</div>
		</div>
	);
};

export default StorageAdmin;
