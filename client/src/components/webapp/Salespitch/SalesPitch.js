import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './salespitch.css';

const SalesPitch = () => {
	return (
		<div>
			<div className='row p-0'>
				<section className='col-md-2 p-0'>
					<MenuBar />
				</section>
				<section className='col-md-10'>
					<div className='content-wrapper'>
						<section className=' pageBody p-0'>
							<h2 className='pageTitle p-4'> Sales Pitch </h2>

							<div className='pageContent bg-light'>
								<div className='row'>
									{/*====================== Products Details =====================*/}
									<section className='col-6 productsDetails p-5'>
										<h5 className='text-right w-75'>
											Sales ID: <span> 000121</span>{' '}
										</h5>
										<form className='w-75'>
											<div className='form-group'>
												<label htmlFor='itemName'> Item Name </label>
												<select className='form-control'>
													<option> Select Item</option>
													<option> Pears Baby Lotion</option>
													<option> Pears Baby Oil</option>
													<option> Pears Baby Cream</option>
													<option> Johnson Powder</option>
													<option> Johnson Baby Lotion</option>
													<option> Johnson Baby Oil</option>
													<option> Caroline Lotion</option>
												</select>
											</div>

											<div className='form-group'>
												<label htmlFor='ItemCategory'> Item Category</label>

												<input
													type='text'
													name='itemCategory'
													className='form-control'
												/>
											</div>

											<section className='d-flex flex-row align-items-start'>
												<div className='form-group'>
													<label htmlFor='itemPrice'>
														<del className='del'>N </del> Price
													</label>

													<input type='text' className='form-control' />
												</div>

												<div className='form-group ml-5'>
													<label htmlFor='itemQty'> Qty</label>

													<input type='text' className='form-control' />
												</div>
											</section>
											<small className=''>
												Date: <span> Mon, April, 2020</span>{' '}
											</small>

											<div className='d-flex flex-row'>
												<div className='form-group p-5'>
													<button className='form-control btn-danger clearBtn rounded-0'>
														{' '}
														Clear{' '}
													</button>
												</div>
												<div className='form-group p-5'>
													<button className='form-control btn-success addBtn rounded-pill'>
														{' '}
														ADD{' '}
													</button>
												</div>
											</div>
										</form>
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
