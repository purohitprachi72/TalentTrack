import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../login/LoginForm';
import styles from './home.module.css';

const Home = () => {
	return (
		<>
			<div className={styles.homepage}>
				<h2>Welcome to talent track</h2>
				<p>Easily manage, track, analyze talent leads</p>
				<LoginForm />
			</div>
		</>
	);
};

export default Home;
