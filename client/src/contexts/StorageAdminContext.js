import React, { createContext, useState } from 'react';
import Axios from 'axios';
import { calls } from '../components/webapp/config/calls';

export const StorageAdminContext = createContext();

const StorageAdminContextProvider = (props) => {
	const [allProducts, setAllProducts] = useState([]);

	const getAllProducts = async () => {
		try {
			const res = await Axios.get(`${calls.ENDPOINT}/products`);

			setAllProducts(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<StorageAdminContext.Provider value={{ allProducts, getAllProducts }}>
			{' '}
			{props.children}{' '}
		</StorageAdminContext.Provider>
	);
};

export default StorageAdminContextProvider;
