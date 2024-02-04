import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../sections/Hero'
import Plans from '../sections/Plans'
import Art from '../sections/Art'
import Footer from '../components/footer/Footer'
import Content from '../sections/Content'
import Reviews from '../sections/Reviews'
import Press from '../sections/Press'
import Uparrow from '../components/up/Uparrow'
import App from '../sections/App'

const Shop = () => {
  return (
    <div>
        
        <Navbar />
        <Hero />
        <Plans />
        <Art />
        <Press />
        <Content />
        <Reviews />
        <App />
        <Uparrow />
        <Footer />

    </div>
  )
}

export default Shop