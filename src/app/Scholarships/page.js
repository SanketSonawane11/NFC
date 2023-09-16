'use client'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import React, { useState } from 'react'


function Scholarships() {

  const [region, setRegion] = useState('');
  const [course, setCourse] = useState('');
  const [results, setResults] = useState('No results');

  const changeRegion = (region) =>
  {
    setRegion(region.target.value);
    console.log(region.target.value);
  }

  const changeCourse = (course) =>
  {
    setCourse(course.target.value);
    console.log(course.target.value);
  }

  return (

        <div className='bodysearch'>
          <div className='navbar-limit'>

            <Navbar />


            {/* <div className="searchbar">
              <div className='search-all'>

                <form>
                <input type="text" className="searchtext" placeholder="Search your Scholarships" />
                <button className="searchbutton">Search</button>
                </form>

              </div>
            </div> */}

            <aside className='filters'>

              <h1> Filters: </h1>

              <div className='final-selection'>

                Results for: {region} . {course}

               </div> 

              <div className='main-pallet'>

                <div className='location'>

                <form>
                  <div className='region-select fields'>

                    <label>Select Region:</label>
                    <select
                      className="region-select"
                      name="region"
                      value={region}
                      onChange={changeRegion}>

                      <option value="india">India</option>
                      <option value="united-states">United States</option>
                      <option value="united-kingdom">United Kingdom</option>
                      <option value="canada">Canada</option>
                      <option value="europe">Europe</option>
                      <option value="south-africa">South Africa</option>
                      <option value="nigeria">Nigeria</option>
                      <option value="pakistan">Pakistan</option>
                    </select>

                  </div>


                  <div className='course-select fields'>

                    <label> Select Course:</label>
                    <select
                      className="course-select"
                      name="course"
                      value={course}
                      onChange={changeCourse}>

                      <option value="Bachelor">Bachelor's</option>
                      <option value="Masters">Master's</option>
                      <option value="Phd">Phd</option>
                      <option value="Course">Course</option>
                    </select>

                  </div>
                  
                </form>

                </div>

              </div>

            </aside>

          </div>

          

          <div className='results-area'>
            
            <div className='text-area'>

              <p className='text-[10vw] w-[45vw] font-bold'>Results : </p>

              {results}

            </div>

          </div>

          {/* <header>Handpicked Scholarships </header>

              <div id="container-search">
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
              </div> */}

              <Footer />

        </div>

  )
}

export default Scholarships