import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage'
import Homepage from './pages/Homepage/Homepage'

export default function App() {
	return (
    <Routes>
      <Route path='/welcome' element={<LandingPage />} />
      <Route path='/home' element={<Homepage />} />
    </Routes>
	);
}
