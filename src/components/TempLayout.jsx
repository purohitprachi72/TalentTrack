import React from 'react';
import Home from '../pages/home/Home';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const TempLayout = () => {
	return (
		<>
			<div className="layout">
				<Header />
				<div className="layout-outlet">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default TempLayout;
