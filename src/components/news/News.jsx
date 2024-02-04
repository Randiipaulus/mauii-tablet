import React, { useRef } from 'react';
import './News.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import banner from '../assets/banners'

const News = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className='all-new'>

        <Swiper
                
                breakpoints={{
                    0: {
                    slidesPerView: 1
                    },
                    1500: {
                    slidesPerView: 1.5
                    },
                }}
                centeredSlides={true}
                autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="slice-news"
                >

            {banner.map(banner =>
                <SwiperSlide key={banner.id} className='item-banner'>
                    <div className="left-news">
                        <img src={banner.photo} alt="" />
                    </div>

                    <div className="right-news">
                        <p className='new-1'>{banner.title} <span>{banner.date}</span></p>
                        <p className="new-2">{banner.info}</p>
                        <p className="new-3">{banner.read}</p>
                    </div>

                </SwiperSlide>
            )}

                <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
                </div>
            </Swiper>

    </div>
  )
}

export default News