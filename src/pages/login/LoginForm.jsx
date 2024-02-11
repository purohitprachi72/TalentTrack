import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './login.module.css';
import { FaGoogle } from 'react-icons/fa';

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
			<div className={styles.loginPageContainer}>
				<div>
					<h2>Login</h2>
					<button className='btn' onClick={handleLogin}>
						{/* <FaGoogle /> */}
						Login with Google
					</button>
				</div>
			</div>
		</>
	);
};

export default LoginForm;
