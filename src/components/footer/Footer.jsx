import React from 'react'
import './Footer.css'
import { IoLanguage } from "react-icons/io5";



const Footer = () => {
  return (
    <div className='all-footer'>
        
        <section className="container-footer">

            <div className="list-1-footer">

                <p>Create for ipad</p>

                    <li>Overview</li>
                    <li>What's New</li>
                    <li>Superpowers</li>
                    <li>Color</li>
                    <li>Brushes</li>
                    <li>Accessibility</li>
                    <li>3D painting</li>

            </div>

            <div className="list-2-footer">

                <p>Create Your Dreams</p>
                <li>Overview</li>

                <p>Create Pocket</p>
                <li>Overview</li>
                <li>What's New</li>

                <p>Create Folio</p>
                <li>Featured Artworks</li>
                <li>Discussions</li>

            </div>

            <div className="list-3-footer">

                <p>Support</p>
                <li>Help Center</li>
                <li>Talk to the team</li>
                <li>Beta program</li>

                <p>Connect</p>
                <li>Instagram</li>
                <li>Youtube</li>
                <li>Twitter</li>
                <li>Facebook</li>

            </div>

            <div className="list-4-footer">

                <p>Discover</p>
                <li>Stories & Insight</li>
                <li>Education</li>
                <li>Press</li>
                <li>Careers</li>
                <li>Brand Use</li>

            </div>
        </section>

        <hr />

        <section className="low-footer">

            <div className="copy-footer">

                <p>Made in Pennsylvania</p>
                <span>Copyrights 2024 Randy Paulus "Mauii" </span>

            </div>

            <ul className="right-footer">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookies Policy</li>
                <span>English <IoLanguage className='icon-footer'/></span>
            </ul>

        </section>

    </div>
  )
}

export default Footer