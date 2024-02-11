import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<Link to="/">Home</Link>
			<Link to="/candidate">candidates listing</Link>
			<Link to="/profile">profile</Link>
			<Link to="/login">login page</Link>
		</>
	);
};

export default Home;
