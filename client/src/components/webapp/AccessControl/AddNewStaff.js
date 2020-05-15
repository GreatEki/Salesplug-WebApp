import React, { useContext } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import NavTab from '../Report/NavTab';
import { AccessContext } from '../../../contexts/AccessContext';

const AddNewStaff = () => {
	const {
		handleInputStaff,
		staff,
		handleAddStaffSubmit,
		errMsg,
		successMsg,
	} = useContext(AccessContext);
	return (
		<div>
			<div className='row'>
				<section className='col-md-2'>
					<MenuBar />
				</section>

				{/* ===== Main Content of Component ===== */}
				<section className='col-md-10'>
					<h2 className='pageTitle p-4'> New Staff Data </h2>

					<NavTab />

					<div className='pageContent addQty'>
						{errMsg.length > 0 ? (
							errMsg.map((er) => {
								return (
									<p className='text-center text-danger' key={er.length}>
										{' '}
										{er}{' '}
									</p>
								);
							})
						) : (
							<h5 className='text-success text-center p-2'>{successMsg}</h5>
						)}
						<form
							onSubmit={(e) => handleAddStaffSubmit(e, staff)}
							className='w-50 h-center p-4'>
							<h5 className='Comic my-2 p-2 siteFont'> Staff Data Entry </h5>
							<div className='w-75'>
								<label htmlFor='firstname'> Firstname </label>

								<input
									type='text'
									name='firstname'
									className='form-control'
									onChange={(e) => handleInputStaff(e)}
									value={staff.firstname}
								/>
							</div>
							<div className='w-75'>
								<label htmlFor='lastname'> Lastname </label>

								<input
									type='text'
									name='lastname'
									className='form-control'
									onChange={(e) => handleInputStaff(e)}
									value={staff.lastname}
								/>
							</div>
							<div className='w-75'>
								<label htmlFor='dept'> Department </label>

								<select
									className='form-control'
									name='dept'
									onChange={(e) => handleInputStaff(e)}
									value={staff.dept}>
									<option> Select Dept</option>
									<option> SuperMarket</option>
									<option> Gadgets</option>
									<option> Pharmacy</option>
									<option> Bakery</option>
									<option> Admin</option>
								</select>
							</div>
							<div className='w-75'>
								<label htmlFor='role'> Staff Role </label>

								<select
									className='form-control'
									name='role'
									onChange={(e) => handleInputStaff(e)}
									value={staff.role}>
									<option> Select Role </option>
									<option> Teller</option>
									<option> Admin </option>
								</select>
							</div>

							<div className='form-group w-50 h-center'>
								<button className='btn btn-block rounded-0'> Submit </button>
							</div>
						</form>
					</div>
				</section>
				{/* ===== End of Main Content of Component ===== */}
			</div>
		</div>
	);
};

export default AddNewStaff;
