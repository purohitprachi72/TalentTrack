import React from 'react';
import { Outlet } from 'react-router-dom';
import CandidateListing from '../pages/CandidateListing';
import Home from '../pages/home/Home';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
	return (
		<>
			<div className="layout">
				<div>
					<CandidateListing />
				</div>

				<Outlet />
			</div>
		</>
	);
};

export default Layout;
