import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import NavTab from '../Report/NavTab';
import './accesscontrol.css';

const AccessControl = () => {
	return (
		<div>
			<div className='row'>
				<section className='col-md-2 p-0'>
					<MenuBar />
				</section>
				{/* ==== Main Content of Component ===== */}
				<section className='col-md-10 pr-4 accessControl'>
					<h2 className='pageTitle p-4'> Access Control </h2>

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
						<div className='col-2'>
							<p> Staff ID</p>
						</div>
						<div className='col-2'>
							<p> Firsname</p>
						</div>
						<div className='col-2'>
							<p> Lastname</p>
						</div>
						<div className='col-2'>
							<p> Department</p>
						</div>
						<div className='col-2'>
							<p> Role</p>
						</div>
						<div className='col-2'>
							<p> Action </p>
						</div>

						<div className='w-100'> </div>

						{/* ======================= Product Listing =========================== */}

						<Link className='col-2'>
							<li>
								<span> 100 </span>
							</li>
						</Link>
						<Link className='col-2'>
							<li>
								<span> Jane </span>
							</li>
						</Link>
						<Link className='col-2'>
							<li>
								<span> Doe </span>
							</li>
						</Link>
						<Link className='col-2'>
							<li className=''>
								<span> Mall </span>
							</li>
						</Link>
						<Link className='col-2 '>
							<li>
								<span> Teller </span>
							</li>
						</Link>
						<Link className='col-2'>
							<li>
								<span className='text-danger'> Remove </span>
							</li>
						</Link>

						{/* ================= End of Product Listing =========================== */}
					</section>

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
