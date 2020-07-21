import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { calls } from '../components/webapp/config/calls';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	const [username, setUsername] = useState('');

	const [password, setPassword] = useState('');

	const [authErrMsg, setAuthErrMsg] = useState('');

	const [authenticatedUser, setAuthenticatedUser] = useState({
		firstname: '',
		lastname: '',
		email: '',
		dept: '',
		role: '',
	});

	const [isAuth, setIsAuth] = useState(false);

	let history = useHistory();

	useEffect(() => {
		sessionStorage.setItem('AuthUser', JSON.stringify(authenticatedUser));
		sessionStorage.setItem('isAuth', JSON.stringify(isAuth));
		sessionStorage.setItem('role', JSON.stringify(authenticatedUser.role));

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authenticatedUser, isAuth]);

	const userSignIn = async (e, username, password) => {
		e.preventDefault();

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
					setIsAuth(true);
					setAuthenticatedUser(() => {
						return {
							firstname: user[0].firstname,
							lastname: user[0].lastname,
							email: user[0].email,
							dept: user[0].dept,
							role: user[0].role,
						};
					});

					history.push('/sales-pitch');
				}
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	const getSignedInUser = () => {
		const sessionUser = sessionStorage.getItem('AuthUser');
		setAuthenticatedUser(JSON.parse(sessionUser));

		const sessionAuth = sessionStorage.getItem('isAuth');
		setIsAuth(JSON.parse(sessionAuth));

		return isAuth;
	};

	const isLogin = () => {
		const sessionAuth = sessionStorage.getItem('isAuth');
		const status = JSON.parse(sessionAuth);
		// console.log(typeof status);

		if (status === true) {
			return true;
		} else {
			return false;
		}
	};

	const isAdmin = () => {
		const Storeduser = sessionStorage.getItem('AuthUser');
		const user = JSON.parse(Storeduser);
		// console.log(user.role);
		if (user.role === 'Admin') {
			return true;
		} else {
			return false;
		}
	};

	const signOutUser = () => {
		sessionStorage.setItem('AuthUser', JSON.stringify({}));
		setAuthenticatedUser({});

		sessionStorage.setItem('isAuth', JSON.stringify(setIsAuth(false)));

		history.push('../login');
		window.location.reload(true);
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
				authenticatedUser,
				setAuthenticatedUser,
				getSignedInUser,
				signOutUser,
				isAuth,
				setIsAuth,
				isLogin,
				isAdmin,
			}}>
			{' '}
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
