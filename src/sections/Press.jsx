import React from 'react'
import News from '../components/news/News'
import './Press.css'
import { IoArrowRedoSharp } from "react-icons/io5";


const Press = () => {
  return (
    <div className='all-press' id='news'>
        
        <div className="container-press">
            <p className='title-press'>Mauii-Tablets insight <IoArrowRedoSharp className='icon-new'/></p>
            <p className='sub-title-press'>Keep up with the latest news in <i>Mauii-Tablets inc.</i></p>
            
            <News />
        </div>
    </div>
  )
}

export default Press