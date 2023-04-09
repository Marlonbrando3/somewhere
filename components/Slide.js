import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import Slides from '../data/slider'
import Image from 'next/image'

export default function slide() {

  const slider = useRef();
  const claim = useRef();

  const left = useRef();
  const right = useRef()

  const [margin, setMargin] = useState(0);

    const images = Slides.map((e,i) => {
        return (
            <div key={i} className='w-[99vw] h-screen object-cover relative'>
                  <Image className='object-cover'
                    src={e.foto}
                    fill
                    responsive
                    alt="img"
                    priority
                  />
                  <div className='flex absolute flex-col w-10/12 left-0 right-0 ml-auto mr-auto lg:w-full md:top-96 top-[60vh] lg:ml-20 lg:mr-96 font-Somewhere uppercase'>
                    <p ref={claim} className='text-white text-[50px] lg:text-[100px] drop-shadow-md leading-[100%]'>{e.claim}</p>
                    <p ref={claim} className='text-white text-[18px] lg:text-[23px] drop-shadow-sm lg:leading-6 leading-4'>{e.desc}</p> 
                    <div className='px-2 text-white text-[23px] bg-white/[0.3] border-2 border-white float-left w-44 text-center mt-4 rounded-sm hover:border-[#00FF32] hover:text-[#00FF32] cursor-pointer'>wiecej</div>
                  </div>
              </div>
        )
    })

    console.log(images)

    const handleSliderToRight = () => {
      if(Math.abs(margin-1) !== images.length) {
      const SliderWidth = margin - 1
      slider.current.style.marginLeft = `${SliderWidth}00%`
      setMargin(margin-1)
      } 
      if(Math.abs(margin-1) === images.length) {
        const SliderWidth = margin
        setTimeout(() => {
          slider.current.style.marginLeft = `${SliderWidth}20%`
          right.current.style.visibility = "hidden"
        },0)
        setTimeout(() => {
          slider.current.style.marginLeft = `${SliderWidth}00%`
          slider.current.style.transition = '0.5s'
        },200)

        setTimeout(() => {
          right.current.style.visibility = "visible"
        },500)
      }
    }

    const handleSliderToLeft  = () => {
      // console.log(margin)
      if(Math.abs(margin) !== images.length-images.length) {
      const SliderWidth = margin + 1
      slider.current.style.marginLeft = `${SliderWidth}00%`
      setMargin(margin+1)
      }

      if(Math.abs(margin) === images.length - images.length) {
        const SliderWidth = margin
        setTimeout(() => {
          slider.current.style.marginLeft = `${SliderWidth}20%`
          left.current.style.visibility = "hidden"
        },0)
        setTimeout(() => {
          slider.current.style.marginLeft = `${SliderWidth}00%`
          slider.current.style.transition = '0.5s'
        },200)
        setTimeout(() => {
          left.current.style.visibility = "visible"
        },500)

      }
    }

      console.log(margin)
      console.log(Math.abs(images.length))

  return (
    <div className='h-screen w-full relative overflow-hidden -mt-24'>
        <div ref={left} onClick={handleSliderToLeft} className='absolute w-12 h-12 border-2 top-[46%] left-2 bg-white/[0.3] hover:border-[#00FF32] rounded-sm z-10 cursor-pointer'>
          <div className='w-[2px] h-10 bg-white/[0.8] mx-auto mt-[1px] -rotate-45 rounded-md hover:border-[#00FF32]'></div>
        </div>
        <div ref={right} onClick={handleSliderToRight} className='absolute w-12 h-12 border-2 top-[46%] right-2 bg-white/[0.3] hover:border-[#00FF32] rounded-sm z-10 cursor-pointer'>
          <div className='w-[2px] h-10 bg-white/[0.8] mx-auto mt-[1px] rotate-45 rounded-md hover:bg-[#00FF32]'></div>
        </div>
        <div ref={slider} className='absolute flex duration-500'>
            {images}
        </div>
    </div>
  )
}
