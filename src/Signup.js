import React from 'react'
import './Signup.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import { auth } from './firebase';
import { login } from './features/userSlice'

const Signup = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[fName, setFName] = useState('')
    const[lName, setLName] = useState('')
    const dispatch = useDispatch()
    const history = useNavigate()

    const signUp = (e) =>{
            e.preventDefault()

            if(!fName){
             return alert("Please enter a fisrt name!")
            }
            if(!lName){
              return alert("Please enter a last name!")
            }
        
            auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
              userAuth.user.updateProfile({
                displayName: fName
              }).then(()=>{
                dispatch(login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: fName,
                })
                )
                history.push('/teslaaccount')
              })
            }).catch((error)=> alert(error.message))
    }

  return (
    <div className='signup'>
    <div className="signup_header">
    <div className="signup_logo">
     <Link to='/'>
    
      <img src="https://png.monster/wp-content/uploads/2021/03/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a.png" alt="logo" />  
     </Link>
    </div>
    <div className="signup_language">
      <LanguageOutlinedIcon /> <span>en-Us</span>
    </div>
  </div>
  <div className="signup_info">
   <h1>Create Account</h1>
   <form className='signup_form'>
   <label htmlFor="fName">First Name</label>
   <input type="text" id='fName' value={fName} onChange = {(e)=> setFName(e.target.value)} />
   <label htmlFor="lName">Last Name</label>
   <input type="text" id='lName' value={lName} onChange = {(e)=>setLName(e.target.value)} />
      
    <label htmlFor="email">Email Address</label>
     <input type="email" id='email' value={email} onChange = {(e)=> setEmail(e.target.value)} />
     <label htmlFor="password">Password</label>
     <input type="password" id='password' value={password} onChange = {(e)=>setPassword(e.target.value)} />

     <ButtonPrimary name = 'create account' type = 'submit' onClick={signUp} />
   </form>
   <div className="signup_divider">
     <hr /> <span>OR</span> <hr />
   </div>
   <Link to='/login' >
      <ButtonSecondary name = 'sign in' />
   </Link>
  </div>
    </div>
  )
}

export default Signup;