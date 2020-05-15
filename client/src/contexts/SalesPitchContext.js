import React, { createContext, useState, useEffect } from 'react';
import { calls } from '../components/webapp/config/calls';
import Axios from 'axios';

export const SalesPitchContext = createContext();

const SalesPitchContextProvider = (props) => {
	const [products, setProducts] = useState([]);
	const [selectedProdID, setSelectedProdID] = useState('');
	const [selectedProduct, setSelectedProduct] = useState([]);
	const [basketItems, setBasketItems] = useState([]);
	const [basketPrice, setBasketPrice] = useState(0);
	const [qty, setQty] = useState(0);

	/* This UseEffect watches the selectedProdID state and
		feteches details of the product. */
	useEffect(() => {
		getSelectedProduct(selectedProdID);

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedProdID]);

	useEffect(() => {
		localStorage.setItem('basketItems', JSON.stringify(basketItems));
		localStorage.setItem('basketPrice', JSON.stringify(basketPrice));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [basketItems]);

	/* Ths fetches all the products from our db.json
		REQUEST TYPE: GET REQUEST 
		URL: /products*/
	const fetchProducts = async () => {
		try {
			const res = await Axios.get(`${calls.ENDPOINT}/products`);

			setProducts(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	/* This handles fetching the selectedProduct to be sold. 
		REQUREST TYPE: GET REQUEST
		URL: /products?id=id*/
	const getSelectedProduct = async (id) => {
		try {
			const res = await Axios.get(`${calls.ENDPOINT}/products?id=${id}`);

			setSelectedProduct(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	/* The method handles saving a selectedProduct for sale to the Sale Basket  */
	const addToBasket = (e, item, qty) => {
		e.preventDefault();
		let id = item.id;

		let product = item[id];

		if (!product) {
			product = item[id] = {
				id,
				name: item.name,
				category: item.category,
				price: item.price * qty,
				qty: qty,
			};
		}

		setBasketItems((basketItems) => [...basketItems, product]);
		setBasketPrice((basketPrice) => (basketPrice += product.price));

		console.log(id);
	};
	return (
		<SalesPitchContext.Provider
			value={{
				fetchProducts,
				getSelectedProduct,
				setSelectedProdID,
				addToBasket,
				setQty,
				qty,
				basketItems,
				selectedProdID,
				selectedProduct,
				products,
			}}>
			{props.children}
		</SalesPitchContext.Provider>
	);
};

export default SalesPitchContextProvider;
