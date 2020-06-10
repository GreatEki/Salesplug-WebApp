import React, { createContext, useState } from 'react';
import Axios from 'axios';
import { calls } from '../components/webapp/config/calls';

export const ReportContext = createContext();

const ReportContextProvider = (props) => {
	const [inbProducts, setInbProducts] = useState([]);

	//Fetch All Inbound records for all prodcuts and dept
	const allInbound = async () => {
		try {
			const res = await Axios.get(`${calls.ENDPOINT}/inbounds`);

			setInbProducts(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<ReportContext.Provider value={{ allInbound, inbProducts }}>
			{props.children}
		</ReportContext.Provider>
	);
};

export default ReportContextProvider;
