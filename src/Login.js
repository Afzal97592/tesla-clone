import React, { useState } from 'react'
import { Navigate, Link, NavLink, useNavigate} from 'react-router-dom';
import './Login.css';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import {auth} from './firebase';
import {useDispatch} from 'react-redux';
import { login } from './features/userSlice'
import Signup1 from './Signup';

function Login() {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useNavigate()

    const signIn = (e) =>{
         e.preventDefault()

         auth.signInWithEmailAndPassword(email, password).then((userAuth)=>{
            dispatch (
              login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayedName: userAuth.user.displayName,
            }).catch((error) => alert(error.message))
         )
         history.push('/teslaaccount')
         })
    }

  return (
    <div className='login'>
      <div className="login_header">
        <div className="login_logo">
         <Link to='/'>
         <img src="https://png.monster/wp-content/uploads/2021/03/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a.png" alt="logo" />
         </Link>
        </div>
        <div className="login_language">
          <LanguageOutlinedIcon /> <span>en-Us</span>
        </div>
      </div>
      <div className="login_info">
       <h1>Sign In</h1>
       <form className='login_form'>
         <label htmlFor="email">Email Address</label>
         <input type="email" id='email' value={email} onChange = {(e)=> setEmail(e.target.value)} />
         <label htmlFor="password">Password</label>
         <input type="password" id='password' value={password} onChange = {(e)=>setPassword(e.target.value)} />

         <ButtonPrimary name = 'Sign In' type = 'submit' onClick = {signIn} />
       </form>
       <div className="login_divider">
         <hr /> <span>OR</span> <hr />
       </div>
        <Link to = '/signup'>
          <ButtonSecondary name = 'create account' />
       </Link>
      </div>
    </div>
  )
}

export default Login
