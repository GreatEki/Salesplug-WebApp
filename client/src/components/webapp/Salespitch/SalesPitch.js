import React, { useContext, useEffect } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './salespitch.css';
import { SalesPitchContext } from '../../../contexts/SalesPitchContext';

const SalesPitch = () => {
	const {
		fetchProducts,
		getSelectedProduct,
		setSelectedProdID,
		selectedProdID,
		selectedProduct,
		products,
	} = useContext(SalesPitchContext);

	useEffect(() => {
		fetchProducts();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			<div className='row p-0'>
				<section className='col-md-2 p-0'>
					<MenuBar />
				</section>
				<section className='col-md-10 pr-4'>
					<div className='content-wrapper'>
						<section className=' pageBody p-0'>
							<h2 className='pageTitle p-4'> Sales Pitch </h2>

							<div className='pageContent bg-light'>
								<div className='row'>
									{/*====================== Products Details =====================*/}
									<section className='col-6 productsDetails p-5'>
										<h5 className='text-right w-75'>
											{/* Sales ID: <span> 000121</span>{' '} */}
										</h5>

										<form className='w-75'>
											<div className='form-group'>
												<label htmlFor='itemName'> Item Name </label>

												<select
													className='form-control'
													value={selectedProdID}
													onChange={(e) => setSelectedProdID(e.target.value)}>
													{products.map((prod) => (
														<option value={prod.id} key={prod.id}>
															{prod.name}
														</option>
													))}
												</select>
											</div>
										</form>

										{selectedProduct.map((item) => (
											<div className='wrapsTheMapping' key={item.value}>
												<div className=''>
													<h5 className='text-muted d-inline'>
														{' '}
														Item Category{' '}
													</h5>

													<h5 className='d-inline text-info Abel'>
														{' '}
														{item.category}{' '}
													</h5>
												</div>
												<div className=''>
													<h5 className='text-muted d-inline'> Item Price </h5>

													<h5 className='d-inline text-success Abel'>
														{' '}
														<del className='del'> N </del>
														{item.price}{' '}
													</h5>
												</div>

												<div className='d-flex flex-row'>
													<div className=' p-5'>
														<button className='form-control btn-danger clearBtn rounded-0'>
															{' '}
															Clear{' '}
														</button>
													</div>
													<div className=' p-5'>
														<button className='form-control btn-success addBtn rounded-pill'>
															{' '}
															ADD{' '}
														</button>
													</div>
												</div>
											</div>
										))}
									</section>
									{/*====================== End of Products Details =====================*/}

									{/*======================= ProductSummary ========================*/}
									<section className='col-6 productsSummary p-5'>
										<div className='w-75 itemList '>
											<ul className='list-group'>
												<li className='list-group-item'>Cras justo odio</li>
												<li className='list-group-item'>
													Dapibus ac facilisis in
												</li>
												<li className='list-group-item'>Morbi leo risus</li>
												<li className='list-group-item'>
													Porta ac consectetur ac
												</li>
												<li className='list-group-item'>Vestibulum at eros</li>
											</ul>
										</div>

										<div className='d-flex flex-row w-100 p-5'>
											<div className='form-group h-center p-5 '>
												<button className='form-control btn-danger clearBtn rounded-0'>
													{' '}
													REMOVE{' '}
												</button>
											</div>
											<div className='form-group h-center p-5'>
												<button className='form-control btn-success addBtn rounded-pill'>
													{' '}
													SUBMIT{' '}
												</button>
											</div>
										</div>
									</section>
									{/*========================== End of Product Summary =======================*/}
								</div>
							</div>
						</section>
					</div>
				</section>
			</div>
		</div>
	);
};

export default SalesPitch;
