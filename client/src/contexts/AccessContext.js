import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const AccessContext = createContext();

const AccessContextProvider = (props) => {
	const [staff, setStaff] = useState({
		firstname: '',
		lastname: '',
		dept: '',
		role: '',
	});

	const [errMsg, setErrMsg] = useState({});
	const [allowSubmit, setAllowSubmit] = useState(false);

	// useEffect(() => {
	// 	let error = Object.values(errMsg);

	// 	console.log(error);
	// 	if (error.lenght > 0) {
	// 		setAllowSubmit(false);
	// 	} else {
	// 		setAllowSubmit(true);
	// 	}
	// }, [errMsg]);

	let ENDPOINT = 'http://localhost:3004';

	const handleInputStaff = (e) => {
		setStaff({
			...staff,
			[e.target.name]: e.target.value,
		});

		// console.log(staff);
	};

	const handleAddStaffSubmit = (e, staff) => {
		addNewStaff(e, staff);
	};

	function validation(staff) {
		let err = { firstname: '', lastname: '', dept: '', role: '' };
		const { firstname, lastname, dept, role } = staff;
		if (!firstname) {
			err.firstname = 'fistname cannot be empty';
		}
		if (!lastname) {
			err.lastname = 'lastname cannot be empty';
		}

		if (!dept) {
			err.dept = 'dept cannot be blank';
		}

		if (!role) {
			err.role = 'role cannot be blank';
		}

		return err;
	}

	//This method handles saving/adding a new staff.
	const addNewStaff = async (e, staff) => {
		e.preventDefault();

		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};
		try {
			let valErr = validation(staff);

			let errors = Object.values(valErr);

			console.log(errors.length);
			if (errors.length > 0) {
				setAllowSubmit(false);
			} else {
				setAllowSubmit(true);
			}

			console.log(allowSubmit);
			if (allowSubmit) {
				const res = await axios.post(`${ENDPOINT}/staffs`, staff, config);

				console.log(res);
			} else {
				return errMsg;
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<AccessContext.Provider
			value={{ handleInputStaff, handleAddStaffSubmit, staff, errMsg }}>
			{props.children}
		</AccessContext.Provider>
	);
};

export default AccessContextProvider;
