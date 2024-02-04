import React, {useState} from 'react'
import './Navbar.css'


import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-scroll';


const Navbar = () => {

    function openMenu (){
        const menu = document.querySelector('.phone-menu-list')
        menu.style.display = 'flex'
    }

    function closeMenu () {
        const menu = document.querySelector('.phone-menu-list')
        menu.style.display = 'none'
    }

    const [openHover1, setOpenHover1] = useState(false);
    const [openHover2, setOpenHover2] = useState(false);

    const setDropdownActive = (dropId) => {
        if (dropId === 1) {
          setOpenHover1((prevOpen) => !prevOpen);
          setOpenHover2(false);
        } else if (dropId === 2) {
          setOpenHover2((prevOpen) => !prevOpen);
          setOpenHover1(false);
        }
      };

  return (
    <div className='all-nav'>
        
        <div className="list-nav">

        <Link to="hero" spy={true} smooth={true} offset={-100} duration={850}>
            <p className='title-nav'><span>Mauii</span>-Tablets</p>
        </Link>


        <ul id='hide-nav'>

            <Link to="hero" spy={true} smooth={true} offset={-100} duration={850}>
                <li className='home-nav'>Home</li>
            </Link>

                <li onClick={() => setDropdownActive(1)} className='sub-list-nav'>
                    <i>Explore <IoIosArrowDown className='icon-arrow-nav'/></i>
                    {openHover1 && (
                        <div className="drop-menu">
                            <ul className='list-drop-menu'>

                            <Link to="plans" spy={true} smooth={true} offset={-50} duration={1100}>
                                <li>Plans & Membership</li>
                            </Link>

                            <Link to="art" spy={true} smooth={true} offset={-100} duration={1100}>
                                <li>Arts from Custumers</li>
                            </Link>

                            <Link to="news" spy={true} smooth={true} offset={-100} duration={1100}>
                                <li>Stories & Insight</li>
                            </Link>

                            <Link to="content" spy={true} smooth={true} offset={-100} duration={1100}>
                                <li>Education</li>
                            </Link>

                            <Link to="reviews" spy={true} smooth={true} offset={-100} duration={1100}>
                                <li>Reviews</li>
                            </Link>

                            <Link to="app" spy={true} smooth={true} offset={-50} duration={1100}>
                                <li>Our App</li>
                            </Link>

                            </ul>
                        </div>
                    )}               
                </li>

                 <li onClick={() => setDropdownActive(2)} className='sub-list-nav'>
                    <i>Support <IoIosArrowDown className='icon-arrow-nav'/></i>
                    {openHover2 && (
                        <div className="drop-menu">
                            <ul className='list-drop-menu'>
                                <li>Support <FaExternalLinkAlt className='icon-support-nav' /></li>
                                <li>Community <FaExternalLinkAlt className='icon-support-nav' /></li>
                                <li>Beginners Series <FaExternalLinkAlt className='icon-support-nav' /></li>
                                <li>Careers <FaExternalLinkAlt className='icon-support-nav' /></li>
                            </ul>
                        </div>
                    )}
                    </li> 
        </ul>

            <div className="phone-list">
                <button onClick={openMenu}>
                    <CiMenuFries className='open-nav'/>
                    </button>

                <div className="phone-menu">
                    <ul className='phone-menu-list'>
                        <button onClick={closeMenu}>
                            <IoCloseOutline className='close-nav'/>
                        </button>

                        <Link to="plans" spy={true} smooth={true} offset={-50} duration={1100}>
                                <li>Plans & Membership</li>
                            </Link>

                            <Link to="art" spy={true} smooth={true} offset={-100} duration={1100}>
                                <li>Arts from Custumers</li>
                            </Link>

                            <Link to="news" spy={true} smooth={true} offset={-100} duration={1100}>
                                <li>Stories & Insight</li>
                            </Link>

                            <Link to="content" spy={true} smooth={true} offset={-100} duration={1100}>
                                <li>Education</li>
                            </Link>

                            <Link to="reviews" spy={true} smooth={true} offset={-100} duration={1100}>
                                <li>Reviews</li>
                            </Link>

                            <Link to="app" spy={true} smooth={true} offset={-50} duration={1100}>
                                <li>Our App</li>
                            </Link>

                            <li>Support <IoIosArrowDown className='phone-icon-arrow-nav'/></li>
                            
                    </ul>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Navbar