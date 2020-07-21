import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	// const isAuthenticated = sessionStorage.getItem('isAuth');

	const { isAuth, setIsAuth, isLogin, isAdmin } = useContext(AuthContext);

	// const auth = sessionStorage.getItem('isAuth');

	return (
		<Route
			{...rest}
			render={(props) =>
				isLogin() && isAdmin() ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/login' }} />
				)
			}
		/>
	);
};

export default PrivateRoute;
