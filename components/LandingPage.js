
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const LandingPage = () => {
  return (
    <section className='sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8'>
        <div className='space-y-8'>
            <h1 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl'>
            <span className='block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>Powered</span>
            <span className='block'>By Intellect</span>
            <span className='block'>Driven By Values</span>
            </h1>

            <div className='space-x-7'>
              <Button title="Buy Now" />
              <span className='link'>Learn More</span>
            </div>   
        </div>

        <div className='relative hidden h-[450px] transition-all duration-500 md:inline lg:h-[650px] w-[600px] '>
            <Image src="https://res.cloudinary.com/dzj8cmkhl/image/upload/v1665873705/e-commerce-app/iphone_pndw7a.png"  alt="iphone-image" objectFit='contain' layout='fill'/>
        </div>
    </section>
  )
}

export default LandingPage