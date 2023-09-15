import Link from 'next/link'
import React from 'react'


export default function Hero() {
  return (
    <div className='hero-main'>
        
        <div className='round'>

            <div className='hero-one'>

            <div className='hero-text'>

                <h1 className='heading'>Your Path to Scholarships</h1>
                <p>Ready to find your perfect scholarship? Dive in and discover the best opportunities!</p>
                <div className='cta'>
                    <button className='cta-btns'>
                        <Link href='/Scholarships'>Discover Scholarships</Link>
                    </button>
                    <button className='cta-btns'>
                        <Link href='/Resources'>View More</Link>
                    </button>
                </div>

                </div>

                <div className='hero-img'>

                </div>

            </div>

            <div className='hero-two'>

                sdfszfsdfds

            </div>

        </div>

    </div>
  )
}
