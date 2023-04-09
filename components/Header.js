import React, { useState } from 'react';
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {SiBehance} from 'react-icons/si'
import {FaArtstation} from 'react-icons/fa'
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoIosArrowUp} from 'react-icons/io'
import Socialheadericons from './socialheadericons';
import Logo from '../images/somewhere_logo.svg';
import Link from 'next/link';

export default function Header() {

  const [openedMobileMenu, setOpenedMobileMenu] = useState(false)

  const handleMobileMenu = () => {  
    setOpenedMobileMenu(!openedMobileMenu)
  }

  console.log(openedMobileMenu)

  return (
    <div className='bg-white w-full h-[120px] z-30 relative'>
        <div id="menu" className='w-11/12 h-[100px] mx-auto flex justify-between'>
            <div id="logo" className='h-[100px] w-[220px] ml-4'>
              <Logo className="h-[100px] w-[220px] my-auto"/>
            </div>
            <div id="right-side-menu" className='flex mx-4'>
                <div id="menu" className='flex lg:w-96 w-auto h-full items-end justify-end lg:justify-between mr-10'>
                  <ul className={openedMobileMenu ? 
                    'absolute lg:sticky duration-300 top-28 left-0 w-full h-[250px] z-0 bg-white/[0.7] md:sticky flex flex-col justify-center items-center'
                    :
                    ' hidden absolute md:static -top-28 lg:bg-transpatent lg:flex text-xl font-Somewhere lg:h-8 lg:w-full uppercase items-center justify-center'}>
                    <li className='menu-item w-32 text-[#454342] md:border-0 border-b border-gray-800 whitespace-nowrap'><Link href="#">O nas</Link></li>
                    <li className='menu-item w-32 text-[#454342] md:border-0 border-b border-gray-800'><Link href="#">Portfolio</Link> </li>
                    <li className='menu-item w-32 text-[#454342] md:border-0 border-b border-gray-800'><Link href="#">Kontakt</Link></li>
                  </ul>
                  <div className=' h-[100px] w-[50px] text-[#454342] visible lg:hidden'>
                    {openedMobileMenu ? <IoIosArrowUp onClick={handleMobileMenu} className='w-full h-full text-[#00FF32] cursor-pointer'/> : <RxHamburgerMenu onClick={handleMobileMenu} className='w-full h-full cursor-pointer'/> }
                  </div>
                </div>
                <span className="hidden lg:block"><Socialheadericons /></span>
            </div>
        </div>
        <div className='bg-gray-900 h-[1.5px] w-11/12 mb-2 text-red-900 mx-auto'></div>
    </div>
  )
}
