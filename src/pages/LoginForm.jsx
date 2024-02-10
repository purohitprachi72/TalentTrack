import React from 'react';
import { useLocation } from 'react-router-dom';

const LoginForm = () => {
	const location = useLocation();

	const { message } = location.state;

	return (
		<>
			<h2>Login Form</h2>
			<p>{message}</p>
		</>
	);
};

export default LoginForm;
