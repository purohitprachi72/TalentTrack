import React, { useState } from 'react';
import {
	Navigate,
	Outlet,
	useLocation,
} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
	const { loginState } = useAuth();

	const location = useLocation();

	console.log(loginState);

	if (!loginState) {
		return (
			<Navigate
				to="/login"
				replace={true}
				state={{
					message: 'login required to access listing page',
					location,
				}}
			/>
		);
	}

	return <Outlet />;
};

export default ProtectedRoute;
