import React from 'react'
import './Hero.css'

import hero from '../components/assets/hero.png'
import { IoIosArrowForward } from "react-icons/io";



const Hero = () => {
  return (
    <div className='all-hero' id='hero'>
        
        <img src={hero} alt="" />

            <p className="hero-1"><span>Mauii</span>-tablets =<span> Dreams</span></p>

            <p className="hero-2">Edit. Animate. Create.</p>

            <p className='hero-3'>Elevate your artistry with our new artist-centric tablet, a portal to
            boundless creativity, offering precision at your fingertips and colors that 
            dance with every stroke.</p>

            <p className="hero-4">Available on the App Store Today</p>

        <section>
            <button className='btn-hero'>LEARN MORE 
            <IoIosArrowForward className='icon-hero'/>
            </button>

            <button className='pink-btn'>Buy Now</button>
        </section>

    </div>
  )
}

export default Hero