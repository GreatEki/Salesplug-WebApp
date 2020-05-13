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

	const [deptName, setDeptName] = useState('');

	let ENDPOINT = 'http://localhost:3004';

	// This method handles inputting values in our form field
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

	// This fetches all registered staffs from our server
	const fetchAllStaff = async () => {
		try {
			const res = await axios.get(`${ENDPOINT}/staffs`);

			setAllStaffs(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	//This removes a staff from our databse server
	const removeStaff = async (e, id) => {
		e.preventDefault();
		try {
			await axios.delete(`${ENDPOINT}/staffs/${id}`);

			window.location.reload(true);
		} catch (err) {
			console.log(err);
		}
	};

	function submitDept(e, name) {
		e.preventDefault();

		const deptName = {
			name: name,
		};

		addNewDept(deptName);
	}

	const addNewDept = async (deptName) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post(`${ENDPOINT}/departments`, deptName, config);

			console.log(res.data);
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
				setDeptName,
				submitDept,
				deptName,
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
