import React from 'react'
import {IoIosArrowUp } from "react-icons/io";
import './Uparrow.css'
import { Link } from 'react-scroll';



const Uparrow = () => {
  return (
    <div className='all-up'>
        
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={1200}>
            <div className="up-arrow-nav">
                <IoIosArrowUp className='up-arrow'/>
            </div>
        </Link>
    </div>
  )
}

export default Uparrow