import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import NavTab from '../Report/NavTab';
import './accesscontrol.css';
import { AccessContext } from '../../../contexts/AccessContext';

const AccessControl = () => {
	const { fetchAllStaff, allStaffs, removeStaff } = useContext(AccessContext);

	useEffect(() => {
		fetchAllStaff();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			<div className='row'>
				<section className='col-md-2 p-0'>
					<MenuBar />
				</section>
				{/* ==== Main Content of Component ===== */}
				<section className='col-md-10 pr-4 accessControl'>
					<h2 className='pageTitle py-auto text-center py-3 '>
						{' '}
						Access Control{' '}
					</h2>

					<NavTab />

					<div className='my-3 d-flex flex-row'>
						<div className='mr-5'>
							<Link to='/access/staff/add' className='Comic'>
								{' '}
								Add New Staff{' '}
							</Link>
						</div>
						<div>
							<Link to='/' className='Comic'>
								{' '}
								Add New Unit{' '}
							</Link>
						</div>
					</div>

					<hr />
					<section className='row p-2 m-1 titleBar scrollable-child '>
						<div className='col-2 py-auto text-center py-3 '>
							<p> Staff ID</p>
						</div>
						<div className='col-2 py-auto text-center py-3 '>
							<p> Firsname</p>
						</div>
						<div className='col-2 py-auto text-center py-3 '>
							<p> Lastname</p>
						</div>
						<div className='col-2 py-auto text-center py-3 '>
							<p> Department</p>
						</div>
						<div className='col-2 py-auto text-center py-3 '>
							<p> Role</p>
						</div>
						<div className='col-2 py-auto text-center py-3 '>
							<p> Action </p>
						</div>

						<div className='w-100'> </div>
					</section>

					{/* ======================= Staff Listing =========================== */}

					{allStaffs.map((staff) => {
						return (
							<Link to='/' className='row productListing' key={staff.id}>
								<div className='col-2 py-auto text-center py-3 '>
									<li>
										<span> {staff.id} </span>
									</li>
								</div>
								<div className='col-2 py-auto text-center py-3 '>
									<li>
										<span> {staff.firstname} </span>
									</li>
								</div>
								<div className='col-2 py-auto text-center py-3 '>
									<li>
										<span> {staff.lastname} </span>
									</li>
								</div>
								<div className='col-2 py-auto text-center py-3 '>
									<li className=''>
										<span> {staff.dept} </span>
									</li>
								</div>
								<div className='col-2 py-auto text-center py-3  '>
									<li>
										<span> {staff.role} </span>
									</li>
								</div>
								<div
									onClick={(e) => removeStaff(e, staff.id)}
									className='col-2 py-auto text-center py-3 btn'>
									<li>
										<span className='text-danger'> Remove </span>
									</li>
								</div>
							</Link>
						);
					})}

					{/* ================= End of Staff Listing =========================== */}

					<section className='pageBottom'>
						<nav className='pagination h-center w-25'>
							<li className='page-item m-2 d-flex flex-row'>
								<button className='page-link mr-3'> 1</button>
								<button className='page-link mr-3'> 2</button>
								<button className='page-link mr-3'> 3</button>
								<button className='page-link mr-3'> 4</button>
								<button className='page-link mr-3'> 5</button>
							</li>
						</nav>
					</section>
				</section>
				{/* ===== End of Main Content of Component ====== */}
			</div>
		</div>
	);
};

export default AccessControl;
