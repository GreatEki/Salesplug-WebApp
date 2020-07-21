import React, { createContext, useState } from 'react';
import Axios from 'axios';
import { calls } from '../components/webapp/config/calls';

export const InboundContext = createContext();

const InboundContextProvider = (props) => {
	const [products, setProducts] = useState([]);

	const [inboundProd, setInboundProd] = useState({});

	const [addedQty, setAddedQty] = useState(0);

	const [respMsg, setRespMsg] = useState('');

	const [inboundHistoryProduct, setInboundHistoryProduct] = useState([]);

	const userDept = 'SuperMarket';
	// const [personnel, setPersonnel] = useState('');

	// Fetch SuperMarket Products
	const fetchSupMktProducts = async () => {
		try {
			const res = await Axios.get(
				`${calls.ENDPOINT}/products?productDept=SuperMarket`
			);

			setProducts(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	//Fetch Gadget Products
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

	/*This method is used to fetch product details for the particular product we want to inbound  */
	const getProdForAddQty = async (id) => {
		try {
			const res = await Axios.get(`${calls.ENDPOINT}/products/${id}`);

			setInboundProd(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	/* Create method to handle inbounding product
        Method is executed inside the handleUpdateQtySubmit() function
    */
	const updateProduQty = async (prod, inbound) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			/* 'PATCH' request to update the currentQty of selected product*/

			await Axios.patch(`${calls.ENDPOINT}/products/${prod.id}`, prod, config);

			/* POST request to save records for every time we inbound a product */
			await Axios.post(`${calls.ENDPOINT}/inbounds`, inbound, config);

			setRespMsg('Product Inbound Successful');
			setAddedQty(0);

			setTimeout(() => {
				setRespMsg('');
			}, 3000);
		} catch (err) {
			console.log(err.message);
		}
	};

	/*  Create handleSubmit method to inbound product
        Method is executed in the AddQty Component
    */
	const handleUpdateQtySubmit = (e, prod, addedQty, staff) => {
		e.preventDefault();

		let { firstname, lastname } = staff;
		//setting the parameters for the product whose qty we want to update
		const product = {
			id: prod.id,
			currentQty: prod.currentQty + addedQty,
		};

		//Setting Date Format
		let dateStyle = {
			weekday: 'short',
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		};
		//instantiating an object of the Date class.
		let today = new Date();

		let dept = '';

		// setting staff who inbounds
		const personnel = firstname + ' ' + lastname;

		//Creating our inbound object
		const inbound = {
			productId: prod.id,
			productName: prod.name,
			productCategory: prod.category,
			existingQty: prod.currentQty,
			inboundedQty: addedQty,
			productDept: prod.productDept,
			Date: today.toLocaleDateString('en-US', dateStyle),
			Personnel: personnel,
		};

		updateProduQty(product, inbound);
	};

	const getInboundHistoryforSupMarket = async () => {
		try {
			const res = await Axios.get(
				`${calls.ENDPOINT}/inbounds?productDept=SuperMarket`
			);

			setInboundHistoryProduct(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<InboundContext.Provider
			value={{
				fetchSupMktProducts,
				fetchGadgetProducts,
				getProdForAddQty,
				setAddedQty,
				updateProduQty,
				handleUpdateQtySubmit,
				getInboundHistoryforSupMarket,
				inboundHistoryProduct,
				addedQty,
				inboundProd,
				products,
				userDept,
				respMsg,
			}}>
			{props.children}
		</InboundContext.Provider>
	);
};

export default InboundContextProvider;
