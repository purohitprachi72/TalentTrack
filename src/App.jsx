import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Form from './components/Form';
import NotFound from './pages/NotFound';
import LoginForm from './pages/login/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import Candidate from './pages/candidate/Candidate';

import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import CandidateListing from './pages/candidate/CandidateListing';
import TempLayout from './components/TempLayout';
import Error from './components/Error';

function App() {
	return (
		<>
			<Routes>
				<Route
					element={<TempLayout />}
					errorElement={Error}
				>
					<Route path="login" element={<LoginForm />} />
					<Route path="/" element={<Home />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/candidate" element={<Layout />}>
							<Route
								path="/candidate/:id"
								element={<Candidate />}
							/>
							<Route
								path="/candidate/new"
								element={<h2> Multi Step Form</h2>}
							/>
							<Route
								path="/candidate/*"
								element={<NotFound />}
							/>
						</Route>

						<Route path="profile" element={<Profile />} />
					</Route>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
