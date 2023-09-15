'use client'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import React, { useState } from 'react'
import sData from '../../sData'

function Home() {

    console.log(sData)

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