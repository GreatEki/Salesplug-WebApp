import React, { createContext, useState } from 'react';
import Axios from 'axios';
import { calls } from '../components/webapp/config/calls';

export const ReportContext = createContext();

const ReportContextProvider = (props) => {
	const [filteredProducts, setFilteredProducts] = useState([]);

	const [chosenDept, setChosenDept] = useState('nill');

	const filterByDept = async (dept) => {
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

	return (
		<ReportContext.Provider
			value={{
				setChosenDept,
				filterByDept,
				filteredProducts,
				chosenDept,
			}}>
			{props.children}
		</ReportContext.Provider>
	);
};

export default ReportContextProvider;
