import Navbar from '@/Components/Navbar'
import React from 'react'
import Image from 'next/image';

function Scholarships() {
  return (
    <div className='bodysearch'>
      
      <Navbar />

        <div id="searchbar">
          <input type="text" id="searchtext" placeholder="Search your Scholarships" />
          <button id="searchbutton">Search</button>
        </div>
        <header>Handpicked Scholarships</header>
          <div id="container">
            <div id="c1">
              <div id="diverse">
                <h2>Diverse Categories</h2>
                <p>Find Scholarships tailored to your interests and academic achievemnets.</p>
              </div>
              <div id="updated">
                <h2>Updated Daily</h2>
                <p>Stay ahead with our real time scholarship listings.</p>
              </div>
              <div id="help">
                <h2>Helpful Resources</h2>
                <p>Get expert guidance and application tips from our resource hub.</p>
              </div>
            </div>
            <div id="c2">
            </div>
          </div>

    </div>
  )
}

export default Scholarships