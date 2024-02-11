import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Form from './components/Form';
import NotFound from './pages/NotFound';
import LoginForm from './pages/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import Candidate from './pages/Candidate';

import Profile from './pages/Profile';
import Home from './pages/Home';
import CandidateListing from './pages/CandidateListing';
import TempLayout from './components/TempLayout';

function App() {
	return (
		<>
			{/* <Home></Home> */}
			<Routes>
				<Route element={<TempLayout />}>
					<Route path="login" element={<LoginForm />} />
					<Route path="/" element={<LoginForm />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/candidate" element={<Layout />}>
							<Route
								path="/candidate/:id"
								element={<Candidate />}
							/>
							<Route
								path="/candidate/new"
								element={<h2>form</h2>}
							/>
						</Route>

						<Route path="profile" element={<Profile />} />
					</Route>

					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
