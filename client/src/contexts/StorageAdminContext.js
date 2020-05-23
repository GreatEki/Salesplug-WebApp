import React, { createContext, useState } from 'react';
import Axios from 'axios';
import { calls } from '../components/webapp/config/calls';

export const StorageAdminContext = createContext();

const StorageAdminContextProvider = (props) => {
	const [allProducts, setAllProducts] = useState([]);
	const [product, setProduct] = useState([]);
	const [value, setValue] = useState('');

	const getAllProducts = async () => {
		try {
			const res = await Axios.get(`${calls.ENDPOINT}/products`);

			setAllProducts(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	const searchProduct = async (e, val) => {
		try {
			e.preventDefault();
			const res = await Axios.get(`${calls.ENDPOINT}/products/?q=${val}`);

			setProduct(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<StorageAdminContext.Provider
			value={{
				allProducts,
				product,
				value,
				setValue,
				getAllProducts,
				searchProduct,
			}}>
			{' '}
			{props.children}{' '}
		</StorageAdminContext.Provider>
	);
};

export default StorageAdminContextProvider;
