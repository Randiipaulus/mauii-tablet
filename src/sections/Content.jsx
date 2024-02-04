import React from 'react'
import './Content.css'

import c4 from '../components/assets/c-4.gif'
import c5 from '../components/assets/c-5.jpg'
import c6 from '../components/assets/c-6.jpg'
import c7 from '../components/assets/c-7.gif'
import c8 from '../components/assets/c-8.gif'

const Content = () => {
  return (
    <div className='all-content' id='content'>
        
        <div className="container-content">

            <div className="card-1-content">
                <div className="card-info-content">
                    <p>beginners series</p>
                    <span>Get Started With Mauii Tablet</span>
                </div>
                <img src={c4} alt="" />
            </div>

            <div className="card-2-content">
                <div className="card-2-info-content">
                    <p>create folio</p>
                    <span>Share Your Art</span>
                </div>
                <img src={c5} alt="" />
            </div>
            
            <div className="card-3-content">
                <div className="card-2-info-content">
                    <p>accebility</p>
                    <span>The Art Is For Eveybody</span>
                </div>
                <img src={c6} alt="" />
            </div>

            <div className="card-4-content">
                <div className="card-info-content">
                    <p>apply now</p>
                    <span>Join Our Demo Program</span>
                </div>
                <img src={c7} alt="" />
            </div>

            <div className="card-5-content">
                <div className="card-2-info-content">
                    <p>education & lessons</p>
                    <span>Create your Super Power Today</span>
                </div>
                <img src={c8} alt="" />
            </div>

        </div>

    </div>
  )
}

export default Content