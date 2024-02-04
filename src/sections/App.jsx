import React from 'react'
import './App.css'

import app1 from '../components/assets/app1.png'
import app2 from '../components/assets/app2.png'
import app3 from '../components/assets/app3.png'



const App = () => {
  return (
    <div className='all-app' id='app'>

        <p className="title-app">Best Drawing & Animated Apps <br /><span>On the Market</span></p>

        <div className="container-app">

            <div className="box-app">
                <div className="up-app">
                    <img src={app1} alt="" />
                </div>

                <div className="down-app">
                    <p>Warrior Skecth</p>
                    <hr />
                    <span>Conquer the canvas with Warrior Sketch! This dynamic
                        drawing app invites artists to unleash creativity 
                        and wield their imagination boldly.</span>
                </div>
            </div>

            <div className="box-app">
                <div className="up-app">
                    <img src={app2} alt="" />
                </div>

                <div className="down-app">
                    <p>Profession-Draw</p>
                    <hr />
                    <span>Elevate artistry with Profession-Draw! Tailored for 
                        professionals, this app refines skills and turns every 
                        stroke into a masterpiece.</span>
                </div>
            </div>

            <div className="box-app">
                <div className="up-app">
                    <img src={app3} alt="" />
                </div>

                <div className="down-app">
                    <p>Kids Sketch</p>
                    <hr />
                    <span>Ignite creativity with Kids Sketch! A playful app 
                        designed for young artists, turning doodles into delightful
                        masterpieces with vibrant colors.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App