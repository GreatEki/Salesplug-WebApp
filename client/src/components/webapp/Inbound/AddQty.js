import React, { useContext, useEffect } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './addqty.css';
import { InboundContext } from '../../../contexts/InboundContext';

const AddQty = (props) => {
	const {
		getProdForAddQty,
		inboundProd,
		setAddedQty,
		addedQty,
		handleUpdateQtySubmit,
	} = useContext(InboundContext);

	const id = props.match.params.id;
	useEffect(() => {
		getProdForAddQty(id);

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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
					<h2 className='pageTitle p-4'> {inboundProd.name} </h2>

					<div className='pageContent addQty'>
						<form
							onSubmit={(e) => handleUpdateQtySubmit(e, inboundProd, addedQty)}
							className='w-50 h-center'>
							<div className='form-group w-50'>
								<label htmlFor='itemName'> Item Name</label>

								<select className='form-control'>
									<option>{inboundProd.name}</option>
								</select>
							</div>
							<div className='form-group w-50'>
								<label className='d-inline'>Product ID:</label>

								<div className='d-inline font-weight-bold'>
									{' '}
									{inboundProd.id}{' '}
								</div>
							</div>
							<div className='form-group w-50'>
								<label htmlFor='itemCategory'> Item Category </label>

								<select className='form-control'>
									<option> {inboundProd.category}</option>
								</select>
							</div>
							<div className='form-group w-25'>
								<label htmlFor='addedQty'> Enter Qty </label>

								<input
									className='form-control'
									value={addedQty}
									onChange={(e) => setAddedQty(parseInt(e.target.value))}
									name='addedQty'
									type='text'
								/>
							</div>

							{/* <div className='form-group w-75'>
								<label htmlFor='comment'> Comment(s)</label>

								<textarea className='form-control' name='comment' />
							</div> */}

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
