import React from 'react';
import { Outlet } from 'react-router-dom';
import CandidateListing from './CandidateListing';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
	const { userLogout } = useAuth();

	return (
		<>
			<p>Header</p>
			<button onClick={userLogout}>Logout</button>
			<CandidateListing />
			<Outlet />
			<footer>Footer</footer>
		</>
	);
};

export default Layout;
