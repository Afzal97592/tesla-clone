import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import HeaderBlock from './HeaderBlock';
import Login from './Login';
import {useDispatch, useSelector} from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Signup from './Signup';
import TeslaAccount from './TeslaAccount';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const[isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()

 useEffect(() =>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        // user is signed in
        dispatch(
          login({
           email: userAuth.email,
           uid: userAuth.uid,
           displayName: userAuth.displayName,
        })
        )
      }else{
        // user is signed out
            dispatch(
              logout()
            )
      }
    })   
 },[dispatch])
  
  
  return (
   
    <div className="app">  
    <BrowserRouter>
      <Routes>
       <Route  path='/' element = {<><Header isMenuOpen = {isMenuOpen} setIsMenuOpen = {setIsMenuOpen} />
        {isMenuOpen && <Menu />}
        <HeaderBlock /> </>} />
      <Route path='/login'
       element = {
        <div> 
        {user ? <Navigate to = '/teslaaccount' /> : <Login /> }
        </div>
      } />

      <Route path='/signup' element = {<Signup/>} />
      <Route path='/teslaaccount' element = {
        <div>
        {!user ? <Navigate to = '/login' /> : (
          <>
          <TeslaAccount isMenuOpen= {isMenuOpen} setIsMenuOpen = {setIsMenuOpen} />
          {isMenuOpen && <Menu />}
          </>
        ) }
       
        </div>
      } />
     </Routes>  
   </BrowserRouter>
  </div>
  );
}

export default App;
