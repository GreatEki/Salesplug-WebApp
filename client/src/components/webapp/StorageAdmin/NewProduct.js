import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import NavTab from '../Report/NavTab';

const NewProduct = () => {
	return (
		<div>
			<div className='row'>
				<section className='col-md-2 p-0'>
					<MenuBar />
				</section>

				{/* ===== Main Content of Component ===== */}
				<section className='col-md-10 pr-4'>
					<h2 className='pageTitle p-4'> Storage Admin </h2>
					<NavTab />

					<div className='card w-100 my-2 mx-auto '>
						<form className='h-center w-50 p-5 newProductForm'>
							<h5 className='Abel text-center'> Register a New Product</h5>

							<div className='form-group'>
								<label htmlFor='itemName' className='Abel'>
									{' '}
									Product Name{' '}
								</label>

								<input type='text' className='form-control' name='itemName' />
							</div>
							<div className='form-group'>
								<label htmlFor='itemCategory' className='Abel'>
									{' '}
									Product Category{' '}
								</label>

								<input
									type='text'
									className='form-control'
									name='itemCategory'
								/>
							</div>

							<section className='radioBtn'>
								<label htmlFor='consumable' className='Abel font-weight-bold'>
									{' '}
									Consumable?{' '}
								</label>
								<div className='form-group form-check'>
									<input
										type='radio'
										name='consumable'
										value='Yes'
										className='form-check-input'
									/>{' '}
									<label htmlFor='Yes' className='form-check-label Abel'>
										{' '}
										Yes{' '}
									</label>
								</div>

								<div className='form-group form-check'>
									<input
										type='radio'
										className='form-check-input'
										name='consumable'
										value='No'
									/>
									<label htmlFor='No' className='form-check-label Abel'>
										{' '}
										No{' '}
									</label>
								</div>
							</section>

							<div className='d-flex flex-row justify-content-between'>
								<div className='form-group'>
									<label htmlFor='costPrice' className='Abel'>
										<del className='del'>N </del> Cost Price{' '}
									</label>

									<input
										type='text'
										className='form-control'
										name='costPrice'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='sellPrice' className='Abel'>
										<del className='del'>N </del> Selling Price{' '}
									</label>

									<input
										type='text'
										className='form-control'
										name='sellPrice'
									/>
								</div>
							</div>

							<div className='form-group w-50 h-center mt-3'>
								<button className='btn btn-block text-white rounded-0 Abel bgPrimary'>
									{' '}
									Submit{' '}
								</button>
							</div>
						</form>
					</div>
				</section>
				{/* ===== End of Main Content of Component */}
			</div>
		</div>
	);
};

export default NewProduct;
