import React from 'react'
import './Youtube.css'
import y1 from '../assets/y-1.jpg'
import y2 from '../assets/y-2.jpg'
import y3 from '../assets/y-3.jpg'
import y4 from '../assets/y-4.jpg'


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Youtube = () => {

  return (
    <div className='all-youtube'>

        <p>Watch Some of Our Reviews from your <br /><span>Favorites Influencers</span></p>

        <div className="container-youtube">
        
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={{
                0: {
                slidesPerView: 1
                },
                750: {
                slidesPerView: 3
                },
            }}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="slicer-you"
        >

            <SwiperSlide>
                <div className="card-you">
                    <img src={y1} alt="" />

                    <div className="card-info-you">
                        <p>Mauii-Tablets Unleashed: The Ultimate Test & Review!</p>
                        <span>Explore Mauii-Tablets' prowess in our hands-on review—performance, 
                            features, and more revealed in this tech adventure!</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="card-you">
                    <img src={y2} alt="" />
                    <div className="card-info-you">
                        <p>Mauii-Tablets Challenge: Pushing Limits and Uncovering Secrets!</p>
                        <span>Join us as we push Mauii-Tablets to the edge, revealing hidden features 
                            and unleashing its power!</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="card-you">
                    <img src={y3} alt="" />

                    <div className="card-info-you">
                        <p>Mauii-Tablets Showdown: Battle of the Tech Titans!</p>
                        <span>Witness the clash of tablets as Mauii faces off against 
                            rivals in this epic tech showdown!</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="card-you">
                    <img src={y4} alt="" />

                    <div className="card-info-you">
                        <p>Mauii-Tablets: The Ultimate Performance Test and Real-world Usage!</p>
                        <span>Discover how Mauii-Tablets performs in real-world scenarios, unveiling 
                            its true capabilities and functionality!</span>
                    </div>
                </div>
            </SwiperSlide>

            
        </Swiper>

        </div>
    </div>
  )
}

export default Youtube