import React, { useContext, useEffect } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import { Link } from 'react-router-dom';
import './inbound.css';
import { InboundContext } from '../../../contexts/InboundContext';

const Inbound = () => {
	const {
		fetchSupMktProducts,
		userDept,
		fetchGadgetProducts,
		products,
	} = useContext(InboundContext);

	useEffect(() => {
		if (userDept === 'SuperMarket') {
			fetchSupMktProducts();
		}
		if (userDept === 'Gadgets') {
			fetchGadgetProducts();
		}

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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

							{products.map((prod) => {
								return (
									<Link
										to='/inbound/add-qty'
										className='row productListing p-2 '
										key={prod.productId}>
										<div className='col-2'>
											<li>
												<span to='/inbound/add-qty'> {prod.productId} </span>
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
				</section>
				{/* End of Main Content of Component */}
			</div>
		</div>
	);
};

export default Inbound;
