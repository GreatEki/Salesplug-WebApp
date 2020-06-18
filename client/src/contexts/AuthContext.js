import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { calls } from '../components/webapp/config/calls';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	const [username, setUsername] = useState('');

	const [password, setPassword] = useState('');

	const [authErrMsg, setAuthErrMsg] = useState('');

	const [authenticatedUser, setAuthenticatedUser] = useState({});

	let history = useHistory();

	useEffect(() => {
		console.log(authenticatedUser);
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authenticatedUser]);

	const userSignIn = async (e, username, password) => {
		e.preventDefault();

		const config = {
			headers: {
				'Content-Type': 'application.json',
			},
		};
		try {
			//Find user via email

			const res = await Axios.get(`${calls.ENDPOINT}/staffs?email=${username}`);

			const user = res.data;

			if (user.length === 0) {
				setAuthErrMsg('Record Not Found');
				return authErrMsg;
			} else {
				// Check password
				if (user[0].password !== password) {
					setAuthErrMsg('Authentication Denied');
					return authErrMsg;
				} else {
					setAuthenticatedUser(user[0]);

					history.push('/sales-pitch');
				}
			}
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<AuthContext.Provider
			value={{
				username,
				setUsername,
				password,
				setPassword,
				userSignIn,
				authErrMsg,
			}}>
			{' '}
			{props.children}{' '}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
