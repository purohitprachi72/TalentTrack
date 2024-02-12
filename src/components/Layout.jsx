import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CandidateListing from '../pages/candidate/CandidateListing';

const Layout = () => {
	const [selected, setSelected] = useState(false);

	const handleSelect = () => {
		setSelected(true);
	};

	return (
		<>
			<div className="section-layout">
				<div className="section-listing">
					<CandidateListing handleSelect={handleSelect} />
				</div>

				<div className="section-outlet">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Layout;
