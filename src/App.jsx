import {
	Navigate,
	Route,
	RouterProvider,
	Routes,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Form from './components/Form';
import NotFound from './pages/NotFound';
import LoginForm from './pages/LoginForm';
import ProtectedRoute from './pages/ProtectedRoute';
import AuthLayout from './components/AuthLayout';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route element={<AuthLayout />}>
				<Route path="login" element={<LoginForm />} />
				<Route path="*" element={<NotFound />} />;
				<Route element={<ProtectedRoute />}>
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
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
