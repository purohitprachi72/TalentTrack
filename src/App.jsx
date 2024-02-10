import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Form from './components/Form';
import NotFound from './pages/NotFound';
import AuthWrapper from './pages/AuthWrapper';
import LoginForm from './pages/LoginForm';

function App() {
	return (
		<Routes>
			<Route path="login" element={<LoginForm />} />
			<Route path="*" element={<NotFound />} />;
			<Route element={<AuthWrapper />}>
				<Route
					path="/"
					element={<Navigate to="/candidate" replace />}
				/>
				<Route path="/candidate" element={<Layout />}>
					<Route path="new" element={<Form />} />
					<Route
						path=":id"
						element={<h2>candidate details</h2>}
					/>
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
