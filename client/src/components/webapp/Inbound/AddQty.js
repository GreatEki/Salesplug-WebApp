import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './addqty.css';

const AddQty = () => {
	return (
		<div>
			<div className='row'>
				{/* ===== Meny Bar ====== */}
				<section className='col-md-2 p-0'>
					<MenuBar />
				</section>
				{/* ==== End of Menu Bar ===== */}

				{/* ===== Main Content of Component ===== */}
				<section className='col-md-10'>
					<h2 className='pageTitle p-4'> Item Name </h2>

					<div className='pageContent addQty'>
						<form className='w-50 h-center'>
							<div className='form-group w-50'>
								<label htmlFor='itemName'> Item Name </label>

								<select className='form-control'>
									<option> Pears Baby Lotion</option>
								</select>
							</div>
							<div className='form-group w-50'>
								<label className='d-inline'>Product ID:</label>

								<input type='text' className='d-inline ml-2' />
							</div>
							<div className='form-group w-50'>
								<label htmlFor='itemCategory'> Item Category </label>

								<select className='form-control'>
									<option> SkinCare and Cosmetics</option>
								</select>
							</div>
							<div className='form-group w-25'>
								<label htmlFor='itemCategory'> Enter Qty </label>

								<input
									className='form-control'
									name='itemCategory'
									type='text'
								/>
							</div>

							<div className='form-group w-75'>
								<label htmlFor='comment'> Comment(s)</label>

								<textarea className='form-control' name='comment' />
							</div>

							<div className='form-group w-50 h-center'>
								<button className='btn btn-block rounded-0'> Submit </button>
							</div>
						</form>
					</div>
				</section>
				{/* ===== End of Main content of Component ===== */}
			</div>
		</div>
	);
};

export default AddQty;
