import React, { createContext, useState, useEffect } from 'react';
import { calls } from '../components/webapp/config/calls';
import Axios from 'axios';

export const SalesPitchContext = createContext();

const SalesPitchContextProvider = (props) => {
	const [products, setProducts] = useState([]);
	const [selectedProdID, setSelectedProdID] = useState('');
	const [selectedProduct, setSelectedProduct] = useState([]);

	useEffect(() => {
		getSelectedProduct(selectedProdID);

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedProdID]);

	//Ths fetches all the products from our db.json
	const fetchProducts = async () => {
		try {
			const res = await Axios.get(`${calls.ENDPOINT}/products`);

			setProducts(res.data);

			// res.data.map((item) => console.log(item.name));
		} catch (err) {
			console.log(err.message);
		}
	};

	// This is intended to get the chosen item to be sold.
	const getSelectedProduct = async (id) => {
		try {
			const res = await Axios.get(`${calls.ENDPOINT}/products?id=${id}`);

			setSelectedProduct(res.data);
			console.log(selectedProduct);
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<SalesPitchContext.Provider
			value={{
				fetchProducts,
				getSelectedProduct,
				setSelectedProdID,
				selectedProdID,
				selectedProduct,
				products,
			}}>
			{props.children}
		</SalesPitchContext.Provider>
	);
};

export default SalesPitchContextProvider;
