import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import authContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isAuthenticated, loading } = useContext(authContext);

	return (
		<div>
			<Route
				{...rest}
				render={(props) =>
					!isAuthenticated && !loading ? (
						<Redirect to='/login' />
					) : (
						<Component {...props} />
					)
				}
			/>
		</div>
	);
};

export default PrivateRoute;
