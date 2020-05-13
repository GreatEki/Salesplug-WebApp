import React, { createContext, useState } from 'react';
import axios from 'axios';
export const AccessContext = createContext();

const AccessContextProvider = (props) => {
	const [staff, setStaff] = useState({
		firstname: '',
		lastname: '',
		dept: '',
		role: '',
	});

	const [errMsg, setErrMsg] = useState([]);
	const [allowSubmit, setAllowSubmit] = useState(false);
	const [successMsg, setSuccessMsg] = useState('');

	const [allStaffs, setAllStaffs] = useState([]);

	let ENDPOINT = 'http://localhost:3004';

	const handleInputStaff = (e) => {
		setStaff({
			...staff,
			[e.target.name]: e.target.value,
		});

		// console.log(staff);
	};

	// This method is called on the OnClick() of the submit in the AddNewStaff Component
	const handleAddStaffSubmit = (e, staff) => {
		addNewStaff(e, staff);
	};

	// This method handles the validating form field in our AddNewStaff Component
	function validation(staff) {
		let err = {};
		const { firstname, lastname, dept, role } = staff;
		if (!firstname) {
			err.firstname = 'firstname cannot be empty';
		}
		if (!lastname) {
			err.lastname = 'lastname cannot be empty';
		}

		if (!dept || dept === 'Select Dept') {
			err.dept = 'department cannot be blank';
		}

		if (!role || role === 'Select Role') {
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

			if (errors.length > 0) {
				setAllowSubmit(false);
				setErrMsg(errors);
				console.log(errors);
				return errMsg;
			} else {
				setAllowSubmit(true);
				setErrMsg({});
				await axios.post(`${ENDPOINT}/staffs`, staff, config);
				setSuccessMsg('Staff saved successfully');

				setStaff({
					firstname: '',
					lastname: '',
					dept: '',
					role: '',
				});
				// console.log(res);
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	const fetchAllStaff = async () => {
		try {
			const res = await axios.get(`${ENDPOINT}/staffs`);

			setAllStaffs(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	const removeStaff = async (e, id) => {
		e.preventDefault();
		try {
			await axios.delete(`${ENDPOINT}/staffs/${id}`);

			window.location.reload(true);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<AccessContext.Provider
			value={{
				handleInputStaff,
				handleAddStaffSubmit,
				fetchAllStaff,
				removeStaff,
				allStaffs,
				staff,
				errMsg,
				allowSubmit,
				successMsg,
			}}>
			{props.children}
		</AccessContext.Provider>
	);
};

export default AccessContextProvider;
