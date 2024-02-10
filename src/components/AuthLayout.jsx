import React from 'react';
import { useOutlet } from 'react-router';
import { AuthProvider } from '../context/AuthContext';

const AuthLayout = () => {
	const outlet = useOutlet();

	return <AuthProvider>{outlet}</AuthProvider>;
};

export default AuthLayout;
