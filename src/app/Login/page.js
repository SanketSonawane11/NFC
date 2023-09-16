'use client'
import Navbar from '@/Components/Navbar'
import React, { useState } from 'react'
import { auth } from '../../../lib/firebase'
import { signInWithProp, GoogleAuthProvider } from 'firebase/auth'


function Login() {

    const googleAuth = new GoogleAuthProvider();



  return (

    <div className='login-page'>


        <Navbar />

        <div className='body'>

            <div className='login-card'>

                <h1> Login </h1>

                <div className='form-login'>

                    <form>

                    Username: <input type='text' placeholder='Username' value= />


                    </form>

                </div>

            </div>

        </div>
        
        

    </div>
  )
}

export default Login