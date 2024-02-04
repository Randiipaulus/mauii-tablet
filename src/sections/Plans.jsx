import React from 'react'
import './Plans.css'

import c1 from '../components/assets/c-1.jpg'
import c2 from '../components/assets/c-2.jpg'
import c3 from '../components/assets/c-3.png'

import { IoIosArrowForward } from "react-icons/io";


const Plans = () => {
  return (
    <div className='all-plan' id='plans'>
        
        <div className="container-plan">

        <section className="plan-1">

            <div className="plan-1-left">
                <p className='plan-1-item-1'>PROCREATE</p>
                <p className='plan-1-item-2'>The complete art studio you can take anywhere.</p>

                <div className="links-plan-1">
                    <p>BUY NOW <IoIosArrowForward className='links-plan-icon'/></p>
                    <span>LEARN MORE <IoIosArrowForward className='links-plan-icon'/></span>
                </div>
            </div>
            
            <img src={c1} alt="" />
        </section>

        <section className='plan-2'>
            <div className="plan-2-info">
                <span>WHATS NEW</span>
                <p>Unlock a new way to interact.</p>
            </div>

        <img src={c2} alt="" />
        </section>

        <section className='plan-3'>
            <div className="plan-3-info">
                <span>CREATIVE POCKET</span>
                <p>Think Bigger</p>
            </div>

        <img src={c3} alt="" />
        </section>

    </div>
    </div>
  )
}

export default Plans