import React from 'react';
import { Outlet } from 'react-router-dom';
import CandidateListing from './CandidateListing';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
	const { userLogout } = useAuth();

	return (
		<>
			{/* <p>Header</p> */}
			{/* <button onClick={userLogout}>Logout</button> */}

			<div className="layout">
				<div>
					<CandidateListing />
				</div>
				<Outlet />
			</div>
			{/* <footer>Footer</footer> */}
		</>
	);
};

export default Layout;
