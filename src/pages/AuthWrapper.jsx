import React, { useState } from 'react';
import {
	Navigate,
	Outlet,
	useLocation,
} from 'react-router-dom';

const AuthWrapper = () => {
	const [loginState, setLoginState] = useState(true);
	const location = useLocation();

	if (!loginState) {
		return (
			<Navigate
				to="login"
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

export default AuthWrapper;
