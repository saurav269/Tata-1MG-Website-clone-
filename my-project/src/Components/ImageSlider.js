

import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {ChevronLeftIcon, ChevronRightIcon,} from '@chakra-ui/icons'
import './Slider.css'

export const ImageSlider = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current + 1)
    }
   //console.log(current)
    
    const prevSlide = () => {

        setCurrent(current === 0 ? length-1 : current -1)
    } 
   console.log(current)

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <section className='slider'>
            <ChevronLeftIcon className='left-arrow' onClick={prevSlide}/>

            <ChevronRightIcon className='right-arrow' onClick={nextSlide}/>

           {SliderData.map((slide, index) => {
            return (
                <div 
                className={index === current  ? 'slide active' : 'slide'} 
                key ={index}
                >
                {index === current && (<img src = {slide.image} alt='' className='image' />)}
                   
                </div>
              
            )
           })}
        </section>
    )

}