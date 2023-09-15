'use client'
import Scholarships from '@/src/app/Scholarships/page';
import SignUp from '@/src/app/SignUp/page';
import Link from 'next/link'
import React, { useState } from 'react'


function Navbar() {

    const [logo, setLogo] = useState("Logo");

  return (
    <div className='navbar'>
        
        <div className='logo'>
            {logo}
        </div>

        <div className='menu'>

            <div className='scholarships moptions'>
                <Link href='/Scholarships'>Find Scholarships</Link>
            </div>

            <div className='resources moptions'>
                <Link href='/resources'>Resources</Link>
            </div>

            <div className='login moptions'>
                <Link href='/Login'>Login</Link>
            </div>

            <div className='signup moptions'>
                    <Link href='/SignUp' className='signup-btn'>Sign Up</Link>
            </div>

        </div>

    </div>
  )
}

export default Navbar