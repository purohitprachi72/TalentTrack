import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../login/LoginForm';
import styles from './home.module.css';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
	const { user } = useAuth();

	return (
		<>
			<div className={styles.homepage}>
				<h2>
					Welcome {user?.displayName.split(' ')[0]} to
					talent track
				</h2>
				<p>Easily manage, track, analyze talent leads</p>
				{!user && <LoginForm />}
			</div>
		</>
	);
};

export default Home;
