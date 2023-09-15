import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';



function Footer() {
  return (
    <div className='footer'>

        <div className='links'>

            <div className='about'>

                <h1> About </h1>

                <p>Mission</p>
                <p>Team</p>
                <p>Contact</p>

                </div>

                <div className='help'>

                <h1> Help </h1>

                <p>FAQ's</p>
                <p>Support</p>
                <p>Resources</p>

                </div>

                <div className='legal'>

                <h1> Legal </h1>

                <p>Privacy</p>
                <p>Terms</p>
                <p>Cookies</p>

            </div>

        </div>

        <div className='cpoyrights'>

            &copy; Scholarship finder

        </div>

    </div>
  )
}

export default Footer