import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import React from 'react'

function Resources() {
  return (
    <div className='resources-page'>

        <Navbar />
        
        <h1 align="center">ARTICLES</h1>
        <div id="container">
            <div id="card1" class="card">
            <div><h2>Essay writing tips</h2></div>
            <div className='one'><a href="https://www.collegeessayguy.com/blog/scholarship-essay-examples" target="_blank">
                {/* <img src="essay.jpg" alt="Image"> */}
            </a></div>
            </div>
            <div id="card2" class="card">
            <div><h2>Application tips</h2></div>
            <div className='two'><a href="https://www.topuniversities.com/student-info/scholarship-advice/7-scholarship-application-tips-winners">
                {/* <img src="tips.jpg" alt="Image"> */}
            </a></div>
            </div>
            <div id="card3" class="card">
            <div><h2>Financial aid guides</h2></div>
            <div className='three'><a href="https://finaid.org/">
                {/* <img src="fin.jpg" alt="Image"> */}
            </a></div>
            </div>
        </div>

    <Footer />

    </div>
  )
}

export default Resources