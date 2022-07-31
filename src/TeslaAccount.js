import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './TeslaAccount.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import {logout, selectUser } from './features/userSlice';
import Car from './Car';
import { auth } from './firebase';

function TeslaAccount({isMenuOpen, setIsMenuOpen}) {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const history = useNavigate()

    const logoutOfApp  = () =>{

      auth.signOut().then(()=>{
        dispatch(logout())
        history.push('/')
      }).catch((error)=>alert(error.message))

      
        
    }
  return (
    <div className='teslaAccount'>
    <div className="teslaAccount_header">
      <div className="teslaAccount_logo">
        <Link to = '/'>
       <img src="https://png.monster/wp-content/uploads/2021/03/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a.png" alt="logo" /> 
        </Link>
      </div>
      <div className='teslaAccount__links'>
          <Link to='/teslaaccount'>Model S</Link>
          <Link to='/teslaaccount'>Model 3</Link>
          <Link to='/teslaaccount'>Model X</Link>
          <Link to='/teslaaccount'>Model Y</Link>
          <Link to='/teslaaccount'>Solar Roof</Link>
          <Link to='/teslaaccount'>Solar Panels</Link>
          <Link to='/teslaaccount'>Shop</Link>
          <Link to='/teslaaccount'>Tesla Account</Link>
          <Link to='/teslaaccount' onClick={logoutOfApp}>Log out</Link>
          <div
            className='teslaAccount__menu'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ?  (<CloseIcon className='teslaAccount_closeMenu' />) : (<MenuIcon />)}
          </div>
        </div>
    </div>
    <div className="teslaAccount_info">
      <div className="teslaAccount_person">
     <h4>{user?.displayName + "'s tesla"}</h4>
      </div>
      <div className="teslaAccount_infoRight">
        <Link to='/teslaaccount'>Home</Link>
        <Link to='/teslaaccount'>Account</Link>
        <Link to='/teslaaccount'>History</Link>
        <Link to='/teslaaccount' onClick={logoutOfApp}>Sign out</Link>
        
      </div>
    </div>

    <div className="teslaAccount_car">
        <Car
         imgSrc = 'https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815' model = 'model s' testDerive />
        <Car imgSrc = 'https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815' model = 'model x' />
     </div> 
    
    </div>
  )
}

export default TeslaAccount