// import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import React from 'react'


function signUp() {
  return (
    <div className='body-signup'>

      <div className='nav h-[15vw]'>

      <Navbar />

      </div>
      
      <div id="container">
      <div id="imagae"><img src="img2.jpg" alt="image" /></div>
      <div id="forms">
        <h1>SIGN UP</h1>
        <div id="name">
          <div id="fname">
            <input
            type="text"
            id="first-name"
            class="inputbox"
            placeholder="Fist name"
          />
          </div>
          <div id="lname">
            <input
            type="text"
            id="last-name"
            class="inputbox"
            placeholder="Last name"
           />
          </div>
 
        </div>
        <div id="nation">
          <input
            type="text"
            id="country"
            class="inputbox"
            placeholder="Country of residence"
          /><span class="icon"></span>
        </div>
        <div id="qual">
          <label for="qualification">Enter your qualification:</label>
          <select name="" id="qualification" onchange="">
            <option value="bachelors" selected>Bachelors</option>
            <option value="masters">Masters</option>
            <option value="phd">P.H.D</option>
          </select>
        </div>
        <div id="mail">
          <input
            type="email"
            id="email"
            class="inputbox"
            placeholder="E-mail"
          /><span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
        </div>
        <div id="pass">
          <input
            type="text"
            id="pasword"
            class="inputbox"
            placeholder="Password"
          /><span class="icon"></span>
        </div>
        <div id="login">Already have an account? <a href="#">Login</a></div>
        <button class="button" id="signup" onclick="">SIGN-UP</button>
      </div>
    </div>

    {/* <Footer /> */}

    </div>
  )
}

export default signUp