import '../App.css'
import MainLogo from '../assets/main-logo.svg'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className='landing-page-container'>
      <img className='landing-page-main-logo' src={MainLogo} alt='main logo' />
      <h1>Welcome to Nico's Coding Playground</h1>
      <h2 className='landing-page-subtitle'>Here I practice my Dev skills</h2>
      <Link to='/dashboard' className='enter-btn'>Enter</Link>
    </div>
  )
}