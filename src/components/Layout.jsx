import React from 'react';
import { Outlet } from 'react-router-dom';
import CandidateListing from '../pages/CandidateListing';
import Home from '../pages/Home';

const Layout = () => {
	return (
		<>
			<div className="layout">
				<div>
					<CandidateListing />
				</div>

				<Outlet />
			</div>
			<footer>Footer</footer>
		</>
	);
};

export default Layout;
