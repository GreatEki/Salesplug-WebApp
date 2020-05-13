import React, { createContext, useState } from 'react';
import Axios from 'axios';
import { calls } from '../components/webapp/utils/calls';

export const InboundContext = createContext();

const InboundContextProvider = (props) => {
	const [products, setProducts] = useState([]);

	const userDept = 'SuperMarket';

	// Fetch SuperMarket Products
	const fetchSupMktProducts = async () => {
		try {
			console.log(calls.ENDPOINT);
			const res = await Axios.get(
				`${calls.ENDPOINT}/products?productDept=SuperMarket`
			);

			setProducts(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	const fetchGadgetProducts = async () => {
		try {
			const res = await Axios.get(
				`${calls.ENDPOINT}/products?productDept=Gadgets`
			);

			setProducts(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<InboundContext.Provider
			value={{
				fetchSupMktProducts,
				fetchGadgetProducts,
				products,
				userDept,
			}}>
			{props.children}
		</InboundContext.Provider>
	);
};

export default InboundContextProvider;
