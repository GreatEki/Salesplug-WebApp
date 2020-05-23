import React, { useContext, useEffect } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './salespitch.css';
import { SalesPitchContext } from '../../../contexts/SalesPitchContext';

const SalesPitch = () => {
	const {
		fetchProducts,

		setSelectedProdID,
		selectedProdID,
		selectedProduct,
		products,
		addToBasket,
		basketItems,
		basketPrice,
		setQty,
		qty,
		sell,
		msg,
		removeBasket,
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

												{/* Here we display a list of productnames and update the selectedProdID state on Change */}
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

										{/* Displaying Details details of the selectedProduct */}
										{selectedProduct.map((item) => (
											<div className='wrapsTheMapping' key={item.name}>
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
														&nbsp; {item.price}{' '}
													</h5>
												</div>

												<form className='form w-50 mt-5'>
													<div className='form-group'>
														<label htmlFor='qty'> Quantity </label>

														<input
															type='text'
															name='qty'
															onChange={(e) => setQty(parseInt(e.target.value))}
															value={qty}
															className='form-control'
														/>
													</div>
													<div className='d-flex flex-row'>
														<div className=' p-5'>
															<button className='form-control btn-danger clearBtn rounded-0'>
																{' '}
																Clear{' '}
															</button>
														</div>
														<div className=' p-5'>
															<button
																onClick={(e) => addToBasket(e, item, qty)}
																className='form-control btn-success addBtn rounded-pill'>
																{' '}
																ADD{' '}
															</button>
														</div>
													</div>
												</form>
											</div>
										))}
										{/*  End of Displaying Details of the selectedProduct */}
									</section>
									{/*====================== End of Products Details =====================*/}

									{/*======================= ProductSummary ========================*/}
									<section className='col-6 productsSummary p-5'>
										<hr />
										<h5 className='text-center Amiri'> Customer's Basket</h5>
										<hr />
										<div className='w-75 itemList '>
											{basketItems.map((item) => (
												<ul className='list-group'>
													<li className='list-group-item'>
														<span className='d-inline'> {item.name} </span>
														<span className='d-inline'>
															{' '}
															<del className='del'> N </del>
															{item.price}{' '}
														</span>
													</li>
												</ul>
											))}
										</div>

										<div>
											<h5 className='Comic my-4 text-center'>
												Total Price: <del className='del'>N </del> {basketPrice}{' '}
											</h5>
										</div>

										<div className='d-flex flex-row w-100 p-5'>
											<div className='form-group h-center p-5 '>
												<button
													onClick={(e) => removeBasket(e)}
													className='form-control btn-danger clearBtn rounded-0'>
													{' '}
													REMOVE{' '}
												</button>
											</div>
											<div className='form-group h-center p-5'>
												<button
													onClick={(e) => sell(e, basketItems, basketPrice)}
													className='form-control btn-success addBtn rounded-pill'>
													{' '}
													SUBMIT{' '}
												</button>
											</div>
										</div>

										<h5 className='text-center text-success'> {msg} </h5>
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
