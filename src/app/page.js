'use client'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import React from 'react'

function Home() {
  return (
    <div className='body'>
    
      <div className='hs'>
        <Navbar />
        <Hero />
      </div>
    
    </div>
  )
}

export default Home