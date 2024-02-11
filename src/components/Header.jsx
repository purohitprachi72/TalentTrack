import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
	return (
		<header className="header">
			<NavLink
				className={({ isActive }) => {
					return isActive ? 'activeLink' : '';
				}}
				to="/"
			>
				<h2>Talent Track</h2>
			</NavLink>

			<nav className="nav">
				<NavLink
					className={({ isActive }) => {
						return isActive ? 'activeLink' : '';
					}}
					to="/candidate"
				>
					Candidates
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						return isActive ? 'activeLink' : '';
					}}
					to="/Profile"
				>
					Profile
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
