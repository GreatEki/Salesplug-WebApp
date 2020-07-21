import React, { createContext, useState, useEffect } from 'react';
import { calls } from '../components/webapp/config/calls';
import { getDate } from '../components/webapp/utils/dateFormatter';
import Axios from 'axios';

export const SalesPitchContext = createContext();

const SalesPitchContextProvider = (props) => {
	const [products, setProducts] = useState([]);
	const [selectedProdID, setSelectedProdID] = useState('');
	const [selectedProduct, setSelectedProduct] = useState([]);
	const [basketItems, setBasketItems] = useState([]);
	const [basketPrice, setBasketPrice] = useState(0);
	const [qty, setQty] = useState(0);
	const [msg, setMsg] = useState('');

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
				productDept: item.productDept,
			};
		}

		setBasketItems((basketItems) => [...basketItems, product]);
		setBasketPrice((basketPrice) => (basketPrice += product.price));

		setQty(0);
	};

	/* This method handles updating the current quamtity of each item sold in our database(store) and saving the sale transaction to SALEs document in our database */
	const sell = async (e, basketItems, basketPrice) => {
		e.preventDefault();

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			basketItems.map(async (item) => {
				//Getting the product of each item in the basket in order to update "currentQty"
				const res = await Axios.get(`${calls.ENDPOINT}/products/${item.id}`);

				const prod = res.data;
				let newCurrentProdQty = prod.currentQty - item.qty;

				// create Object products that reflects the new quantity
				let updateProduct = {
					currentQty: newCurrentProdQty,
				};

				//updating the quantity of each item in the database
				await Axios.patch(
					`${calls.ENDPOINT}/products/${item.id}`,
					updateProduct,
					config
				);
			});

			//Save record of Sale Transaction to SALES Document in database

			// Create Object of Sale record
			const saleTransaction = {
				products: basketItems,
				amount: basketPrice,
				date: getDate(),
			};

			await Axios.post(`${calls.ENDPOINT}/sales`, saleTransaction, config);

			setMsg('Transaction submitted successfully');

			setTimeout(() => {
				setMsg('');
				setBasketItems([]);
				setBasketPrice(0);
			}, 3000);
		} catch (err) {
			console.log(err.message);
		}
	};

	const removeBasket = (e) => {
		e.preventDefault();

		setBasketItems([]);
		setBasketPrice(0);
	};

	return (
		<SalesPitchContext.Provider
			value={{
				fetchProducts,
				getSelectedProduct,
				setSelectedProdID,
				addToBasket,
				setQty,
				sell,
				removeBasket,
				qty,
				basketItems,
				basketPrice,
				selectedProdID,
				selectedProduct,
				products,
				msg,
			}}>
			{props.children}
		</SalesPitchContext.Provider>
	);
};

export default SalesPitchContextProvider;
