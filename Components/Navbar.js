'use client'
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

            <div className='scholarships'>
                <Link href='/Scholarships'>Find Scholarships</Link>
            </div>

            <div className='resources'>
                <Link href='/resources'>Resources</Link>
            </div>

            <div className='login'>
                <Link href='/Login'>Login</Link>
            </div>

            <div className='signup'>
                <Link href='/Signup'>Sign Up</Link>
            </div>

        </div>

    </div>
  )
}

export default Navbar