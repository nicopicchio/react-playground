import MainLogo from '../assets/main-logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header-container'>
      <img src={MainLogo} className='header-main-logo' alt='main logo' />
    </div>
  )
}