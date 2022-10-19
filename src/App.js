import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Homepage from './pages/Homepage';

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/dashboard' element={<Homepage />} />
		</Routes>
	);
}
