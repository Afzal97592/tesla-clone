import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = ({isMenuOpen, setIsMenuOpen}) => {
  return (
    <div className='header'>
       <div className="header_logo">
         <Link to='/'>
          <img className='header_logoImg' src="https://png.monster/wp-content/uploads/2021/03/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a.png" alt="logo" />
         </Link>
       </div> 
       <div className="header_links">
         <Link to='/'>Model S</Link>
         <Link to='/'>Model 3</Link>
         <Link to='/'>Model X</Link>
         <Link to='/'>Model Y</Link>
         <Link to='/'>Solar Roof</Link>
         <Link to='/'>Solar Panels</Link>
       </div>
       <div className="header_right">
         <Link to= '/' className={isMenuOpen?'header_link-hidden' : ''}>Shop</Link>
         <Link to= '/login' className={isMenuOpen? 'header_link-hidden' : ''}>Tesla Account</Link>
         <div className="header_menu" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
             {isMenuOpen? <CloseIcon/> : <MenuIcon />}
         </div>
       </div>
    </div>
  )
}

export default Header