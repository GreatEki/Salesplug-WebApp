import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './reportsales.css';
import MenuBar from '../MenuBar/MenuBar';
import NavTab from './NavTab';
import { ReportContext } from '../../../contexts/ReportContext';

const ReportSales = () => {
	const { chosenDept, setChosenDept, salesByDept, soldRecords } = useContext(
		ReportContext
	);

	useEffect(() => {
		salesByDept();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			<div className='row'>
				<section className='col-md-2 p-0'>
					<MenuBar />
				</section>

				{/* ===== Main Content of Component ===== */}
				<section className='col-md-10'>
					<h2 className='pageTitle p-4'> Sales Report </h2>
					<NavTab />

					<section className='ml-4 p-2 form-group w-25'>
						<label htmlFor='dept_filt'> Filter by Dept: </label>
						&nbsp;
						<select
							className='form-control'
							onChange={(e) => setChosenDept(e.target.value)}
							value={chosenDept}>
							<option value='nill'> Select Dept</option>
							<option value='SuperMarket'> SuperMarket</option>
							<option value='Pharmacy'> Pharmacy</option>
							<option value='Gadgets'> Gadgets</option>
							<option value='Health and Fitness'> Health and Fitness</option>
							<option value='Fashion'> Fashion</option>
						</select>
					</section>

					<hr />
					{/* Title Bar */}
					<section className='outer-grid report-sales-title bg-light'>
						<div> Time </div>
						<div> Basket Id </div>
						<div className='outer-flex'>
							<div className='inner-flex'>
								<div> Item Name </div>
								<div> Qty Sold </div>
								<div> Price </div>
							</div>
						</div>
						<div> Basket Total </div>
					</section>
					{/* End of Title Bar */}

					{/* Items Display Layout */}
					{soldRecords.map((record, index) => (
						<section
							className='outer-grid item-display-layout bg-light'
							key={index}>
							<div> {record.date} </div>
							<div> {record.id}</div>

							<div className='outer-flex'>
								{record.products.map((item, index) => {
									return (
										<div className='inner-flex' key={index}>
											<div> {item.name}</div>
											<div> {item.qty} </div>
											<div> {item.price}</div>
										</div>
									);
								})}
							</div>
							<div> {record.amount}</div>
						</section>
					))}
					{/* End of Items Display Layout */}

					<section className='pageBottom'>
						<div className='h-center w-25'>
							<h3>
								{' '}
								Total Sales: <del className='del'>N </del> 250, 000{' '}
							</h3>
						</div>
					</section>
				</section>
				{/*  ====== End of Main Content of Component ===== */}
			</div>
		</div>
	);
};

export default ReportSales;
