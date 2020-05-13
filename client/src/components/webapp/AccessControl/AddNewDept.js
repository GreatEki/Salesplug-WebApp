import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import NavTab from '../Report/NavTab';
import { AccessContext } from '../../../contexts/AccessContext';
const AddNewDept = () => {
	const { deptName, setDeptName, submitDept } = useContext(AccessContext);
	return (
		<div>
			<div className='row'>
				<section className='col-md-2'>
					<MenuBar />
				</section>
				<main className='col-md-10'>
					<h2 className='pageTitle py-auto py-3 '>New Department </h2>

					<NavTab />
					<div className='mt-2'>
						<i className='fas fa-arrow-left siteFont'></i>
						<Link to='/access'> Back </Link>
					</div>
					<div className='card w-75 h-center newDeptPanel'>
						<h5 className='text-center siteFont '>New Department Form </h5>
						<form
							onSubmit={(e) => submitDept(e, deptName)}
							className='w-75 h-center'>
							<div className='form-group'>
								<label htmlFor='deptName' className='Abel font-weight-bold'>
									{' '}
									Enter New Department{' '}
								</label>

								<input
									type='text'
									onChange={(e) => setDeptName(e.target.value)}
									value={deptName}
									name='deptName'
									className='form-control'
									required
								/>
							</div>

							<div className='form-group w-50 h-center mt-5'>
								<button className='btn btn-block rounded-0 bgPrimary text-white Abel'>
									{' '}
									Save{' '}
								</button>
							</div>
						</form>
					</div>
				</main>
			</div>
		</div>
	);
};

export default AddNewDept;
