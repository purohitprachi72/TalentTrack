import React from 'react';
import { Outlet } from 'react-router-dom';
import CandidateListing from './CandidateListing';

const Layout = () => {
	return (
		<>
			<p>Header</p>
			<CandidateListing />
			<Outlet />
			<footer>Footer</footer>
		</>
	);
};

export default Layout;
