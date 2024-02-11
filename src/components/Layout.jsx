import React from 'react';
import { Outlet } from 'react-router-dom';
import CandidateListing from '../pages/candidate/CandidateListing';

const Layout = () => {
	return (
		<>
			<div className="section-layout">
				<div className="section-listing">
					<CandidateListing />
				</div>

				<div className="section-outlet">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Layout;
