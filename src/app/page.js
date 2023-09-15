'use client'
import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'
import Footer from '@/Components/Footer'
import React, { useState } from 'react'


function Home() {

  return (
    <div className='body'>
    
      <div className='hs'>
        <Navbar />
        <Hero />
      </div>

      <Footer />     
    
    </div>
  )
}

export default Home