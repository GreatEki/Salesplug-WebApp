import React, { createContext, useState } from 'react';
import Axios from 'axios';
import { calls } from '../components/webapp/config/calls';

export const StorageAdminContext = createContext();

const StorageAdminContextProvider = (props) => {
	const [allProducts, setAllProducts] = useState([]);
	const [product, setProduct] = useState([]);
	const [value, setValue] = useState('');

	const [allDepts, setAllDepts] = useState([]);
	const [newProduct, setNewProduct] = useState({
		name: '',
		category: '',
		consumable: '',
		costPrice: 0,
		price: 0,
		currentQty: 0,
		productDept: '',
	});

	const [errMsg, setErrMsg] = useState([]);
	const [successMsg, setSuccessMsg] = useState('');

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

	const getAllDepartments = async () => {
		try {
			const res = await Axios.get(`${calls.ENDPOINT}/departments`);

			setAllDepts(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	const handleInputNewProduct = (e) => {
		setNewProduct({ ...newProduct, [e.target.name]: e.target.value });

		console.log(newProduct);
	};

	const validateNewProductsFields = function (product) {
		const {
			name,
			category,
			consumable,
			costPrice,
			price,
			currentQty,
			productDept,
		} = product;

		let errors = {};
		if (!name || name === '') {
			errors.name = 'Name Field cannot be blank';
		}

		if (!category || category === '') {
			errors.category = 'Product must have a category';
		}
		if (!consumable || consumable === '') {
			errors.category = 'Consumable: Select Yes or No';
		}
		if (!costPrice || costPrice === 0) {
			errors.category = 'Enter Cost Price for Product';
		}
		if (!price || price === 0) {
			errors.category = 'Enter Selling Price for Product';
		}
		if (!currentQty || currentQty === 0) {
			errors.category = 'Enter Product Quantity';
		}
		if (!productDept || productDept === '') {
			errors.category = 'Please Select Product Dept';
		}

		return errors;
	};

	const registerNewProduct = async (e, product) => {
		e.preventDefault();
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			let errors = validateNewProductsFields(product);

			errors = Object.values(errors);

			if (errors.length > 0) {
				setErrMsg(errors);
				return errMsg;
			} else {
				await Axios.post(`${calls.ENDPOINT}/products`, product, config);

				setSuccessMsg('New Product Added');
				setNewProduct({
					name: '',
					category: '',
					consumable: '',
					costPrice: 0,
					price: 0,
					currentQty: 0,
					productDept: '',
				});

				setTimeout(() => {
					setSuccessMsg('');
				}, 3000);
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	const handleSubmit = (e, newProduct) => {
		e.preventDefault();
		registerNewProduct(newProduct);
	};
	return (
		<StorageAdminContext.Provider
			value={{
				allProducts,
				product,
				value,
				allDepts,
				newProduct,
				errMsg,
				successMsg,
				handleInputNewProduct,
				handleSubmit,
				registerNewProduct,
				setValue,
				getAllProducts,
				getAllDepartments,
				searchProduct,
			}}>
			{' '}
			{props.children}{' '}
		</StorageAdminContext.Provider>
	);
};

export default StorageAdminContextProvider;
