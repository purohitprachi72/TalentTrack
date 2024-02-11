import React from 'react';
import Home from '../pages/Home';
import { Outlet } from 'react-router-dom';

const TempLayout = () => {
	return (
		<>
			<Home></Home>;
			<Outlet />
		</>
	);
};

export default TempLayout;
