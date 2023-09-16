'use client'
import Navbar from '@/Components/Navbar'
import React, { useState } from 'react'
import { auth } from '..'
// import { useAuthState } from 'react-firebase-hooks/auth'
import { signInWithProp, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// import { useCollection } from 'react-firebase-hooks/firestore'
// import { useRouter } from 'next/router';


function Login() {

    // const [user, setUser] = useState('');    
    // const [pass, setPass] = useState('');
    const googleAuth = new GoogleAuthProvider();
    // const [loggedIn, setLoggedIn] = useState(false);
    const [loginText, setLoginText] = useState('Login');
    // const router = useRouter();
  
    const login = async (e) => {
      e.preventDefault();
  
      try {
        const result = await signInWithPopup(auth, googleAuth);
        const user = result.user;
        
        console.log(`Successfully signed in as ${user.displayName}`);
        setLoginText('Logged in successfully');

      } catch (error) {
        console.error("Error signing in with Google:", error.message);
      }

    };


  return (

    <div className='login-page'>


        <Navbar />

        <div className='body'>

            <div className='login-card'>

                <h1> {loginText} </h1>

                <div className='form-login'>

                    <form className='form-login'>

                    {/* Username: <input className='cred m-[0.2vw] border-[0.1vw] border-black p-[0.3vw]' type='text' placeholder='User Id' value={user} 
                    onChange={(e) =>
                    {
                        setUser(e.target.value);
                        console.log(user);
                    }}/>

                    Password: <input className='cred m-[0.2vw] border-[0.1vw] border-black p-[0.3vw]' type='text' placeholder='Password' value={pass} 
                    onChange={(e) =>
                    {
                        setPass(e.target.value);
                        console.log(pass);
                    }}/> */}

                    <button onClick={login} className='loginpg-btn'>Login</button>

                    </form>

                </div>

            </div>

        </div>
        
        

    </div>
  )
}

export default Login