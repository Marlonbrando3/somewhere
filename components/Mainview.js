import React from 'react'
import Image from 'next/image'
import { useRef } from 'react'
import Header from './Header'
import Slide from './Slide'
import Footer from './Footer'
import Socialheadericons from './Socialheadericons'
import Sygnet from "../images/somewhere_sygnet.svg"


export default function Mainview() {

  const signature = useRef();

  return (
    <div className='w-[99vw]'>
      <div className='bg-white w-full h-full flex flex-col'>
      <div className='absolute w-[9vw] h-full right-0 z-0 flex items-center mr-2'>
        <Sygnet ref={signature}  />
      </div>
      <div className='absolute w-[9vw] h-full left-0 z-0 flex items-center mr-2'>
        <Sygnet ref={signature} />
      </div>
          <Header />
          <Slide />
          <span className='flex flex-col justify-center items-center mb-4 lg:hidden'>
            <div className='bg-gray-900 h-[1.5px] w-11/12 mt-3 text-red-900 mx-auto -mb-4'></div>
            <Socialheadericons />
            </span>
          <Footer />
      </div>
    </div>
  )
}
