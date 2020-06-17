import React, { useEffect, useContext } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import NavTab from '../Report/NavTab';
import { StorageAdminContext } from '../../../contexts/StorageAdminContext';
import './newproduct.css';

const NewProduct = () => {
	const {
		getAllDepartments,
		allDepts,
		errMsg,
		successMsg,
		newProduct,
		registerNewProduct,
		handleInputNewProduct,
		handleSubmit,
	} = useContext(StorageAdminContext);

	useEffect(() => {
		getAllDepartments();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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
						<form
							onSubmit={(e) => registerNewProduct(e, newProduct)}
							className='h-center w-50 p-5 newProductForm'>
							<h5 className='Abel text-center'> Register a New Product</h5>

							{errMsg.length > 0 ? (
								errMsg.map((err, index) => (
									<p className='text-center text-danger errText' key={index}>
										{' '}
										{err}
									</p>
								))
							) : (
								<p className='text-center text-success successMsg'>
									{' '}
									{successMsg}{' '}
								</p>
							)}

							<div className='form-group'>
								<label htmlFor='name' className='Abel'>
									{' '}
									Product Name{' '}
								</label>

								<input
									type='text'
									className='form-control'
									name='name'
									value={newProduct.name || ''}
									onChange={(e) => handleInputNewProduct(e)}
								/>
							</div>

							<div className='form-group'>
								<label htmlFor='category' className='Abel'>
									{' '}
									Product Category{' '}
								</label>

								<input
									type='text'
									className='form-control'
									name='category'
									value={newProduct.category}
									onChange={(e) => handleInputNewProduct(e)}
								/>
							</div>

							<div className='form-group'>
								<label htmlFor='consumable'> Consumable </label>

								<select
									className='form-control'
									name='consumable'
									value={newProduct.consumable}
									onChange={(e) => handleInputNewProduct(e)}>
									<option value='Yes'> Yes </option>
									<option value='No'> No </option>
								</select>
							</div>

							<div className='d-flex flex-row justify-content-between'>
								<div className='form-group'>
									<label htmlFor='costPrice' className='Abel'>
										<del className='del'>N </del> Cost Price{' '}
									</label>

									<input
										type='text'
										className='form-control'
										name='costPrice'
										value={newProduct.costPrice}
										onChange={(e) => parseInt(handleInputNewProduct(e))}
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='price' className='Abel'>
										<del className='del'>N </del> Selling Price{' '}
									</label>

									<input
										type='text'
										className='form-control'
										name='price'
										value={newProduct.price}
										onChange={(e) => parseInt(handleInputNewProduct(e))}
									/>
								</div>
							</div>

							<div className='form-group'>
								<label htmlFor='currentQty' className='Abel'>
									<del className='del'>N </del> Qunatity{' '}
								</label>

								<input
									type='text'
									className='form-control'
									name='currentQty'
									value={newProduct.currentQty}
									onChange={(e) => parseInt(handleInputNewProduct(e))}
								/>
							</div>

							<div className='form-group'>
								<label htmlFor='productDept' className='Abel'>
									{' '}
									Product Department{' '}
								</label>

								<select
									className='form-control'
									name='productDept'
									value={newProduct.productDept}
									onChange={(e) => handleInputNewProduct(e)}>
									{allDepts.map((dept, index) => {
										return (
											<option
												key={index}
												className='form-control'
												value={dept.name}>
												{' '}
												{dept.name}{' '}
											</option>
										);
									})}
								</select>
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
