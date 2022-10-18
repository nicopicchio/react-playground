import './LandingPage.css'
import MainLogo from '../../assets/main-logo.svg'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div id='landing-page-container'>
      <img src={MainLogo} alt='react logo' />
      <h1>Welcome to Nico's Coding Playground</h1>
      <h2>A place where I practice my Dev skills</h2>
      <Link to='/home'>Enter</Link>
    </div>
  )
}