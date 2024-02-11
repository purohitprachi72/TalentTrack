import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const { signUpWithGoogle } = useAuth();

	const handleLogin = async () => {
		try {
			await signUpWithGoogle();
			navigate('/candidate', { replace: true });
		} catch (error) {
			console.error(`error occurred`, error);
		}
	};

	return (
		<>
			<h2>Login Form</h2>
			{/* <p>{message}</p> */}
			<div>
				<h1>Login Page</h1>
				<button onClick={handleLogin}>
					Login with Google
				</button>
			</div>
		</>
	);
};

export default LoginForm;
