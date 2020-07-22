import React, { createContext, useState } from 'react';
import Axios from 'axios';
import { calls } from '../components/webapp/config/calls';

export const ReportContext = createContext();

const ReportContextProvider = (props) => {
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [soldRecords, setSoldRecords] = useState([]);

	const [chosenDept, setChosenDept] = useState('nill');

	const [salesTotal, setSalesTotal] = useState(0);

	const inboundsByDept = async (dept) => {
		try {
			const res = await Axios.get(
				`${calls.ENDPOINT}/inbounds?productDept=${dept}`
			);

			// console.log(res.data);
			setFilteredProducts(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	const salesByDept = async () => {
		try {
			const res = await Axios.get(`${calls.ENDPOINT}/sales`);

			const result = res.data;
			setSoldRecords(res.data);

			// Logic to get the total amount in sales done.
			let total = 0;
			result.map((item) => {
				total += item.amount;
			});
			// console.log(total);
			setSalesTotal(total);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<ReportContext.Provider
			value={{
				setChosenDept,
				inboundsByDept,
				salesByDept,
				filteredProducts,
				soldRecords,
				chosenDept,
				salesTotal,
			}}>
			{props.children}
		</ReportContext.Provider>
	);
};

export default ReportContextProvider;
