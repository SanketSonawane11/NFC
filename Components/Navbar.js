'use client'
import Scholarships from '@/src/app/Scholarships/page';
import Link from 'next/link'
import React, { useState } from 'react'


function Navbar() {

    const [logo, setLogo] = useState("Funded Futures");
    // const login = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //       const result = await signInWithPopup(auth, googleAuth);
    //       const user = result.user;
          
    //       console.log(`Successfully signed in as ${user.displayName}`);
  
    //     } catch (error) {
    //       console.error("Error signing in with Google:", error.message);
    //     }
        
    //   };

  return (
    <div className='navbar'>
        
        <div className='logo'>
            <Link href='/'>{logo}</Link>
        </div>

        <div className='menu'>

            <div className='scholarships moptions'>
                <Link href='/Scholarships'>Find Scholarships</Link>
            </div>

            <div className='resources moptions'>
                <Link href='/Resources'>Resources</Link>
            </div>

            <div className='login moptions'>
                {/* <form> */}
                <Link href='/Login'> Login / Sign Up </Link>
                {/* </form> */}
            </div>

        </div>

    </div>
  )
}

export default Navbar