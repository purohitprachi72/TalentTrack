import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
	const location = useLocation();
	const { userLogin, loginState } = useAuth();
	const navigate = useNavigate();


	const handleLogin = () => {
		console.log('logging in');
		userLogin();
		navigate('/');
	};


	return (
		<>
			<h2>Login Form</h2>
			{/* <p>{message}</p> */}
			<button onClick={handleLogin}>login</button>
		</>
	);
};

export default LoginForm;
