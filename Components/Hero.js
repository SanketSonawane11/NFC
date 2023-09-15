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

                <div className='row1 card-row'>

                    <div className='card'>

                        <div className='r1-c1 cards'>
                            
                        </div>

                        <h1> Academic Opportunities </h1>
                        <p>Uncover scholarships tailored to your academic pursuits.</p>

                    </div>

                    <div className='card'>

                        <div className='r1-c2 cards'>
                            
                        </div>

                        <h1> Inclusive Scholarships </h1>
                        <p>Find scholarships designed for students from all backgrounds.</p>

                    </div>

                    <div className='card'>

                        <div className='r1-c3 cards'>
                            
                        </div>

                        <h1> Specialized Fields </h1>
                        <p>Discover scholarships for niche subjects and industries.</p>

                    </div>

                </div>

                <div className='row2 card-row'>

                <div className='card'>

                    <div className='r2-c1 cards'>
                        
                    </div>

                    <h1>Global Access</h1>
                    <p>Connect with scholarships offered around the world.</p>

                    </div>

                    <div className='card'>

                    <div className='r2-c2 cards'>
                        
                    </div>

                    <h1> Creative Scholarships </h1>
                    <p>Unleash your creativity and find scholarships to support your passion.</p>

                    </div>

                    <div className='card'>

                    <div className='r2-c3 cards'>
                        
                    </div>

                    <h1> Outdoor Enthusiasts </h1>
                    <p>Embark on adventures with scholarships for outdoor lovers.</p>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}
