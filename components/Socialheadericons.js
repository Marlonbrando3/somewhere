import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {SiBehance} from 'react-icons/si'
import {FaArtstation} from 'react-icons/fa'

export default function Socialheadericons() {
  return (
    <div id="menu" className='w-[300px] lg:w-[250px] h-full flex justify-between items-center pt-8 mr-4'>
            <FaArtstation className='p-1 w-[32px] text-[#454342] h-[32px] cursor-pointer hover:text-[#00FF32] transition-all hover:p-0'/>
            <SiBehance className='p-1 w-[37px] text-[#454342] h-[37px] cursor-pointer hover:text-[#00FF32] transition-all hover:p-0'/>
            <FaInstagram className='p-1 w-[37px] text-[#454342] h-[37px] cursor-pointer hover:text-[#00FF32] transition-all hover:p-0' />
            <FaFacebookSquare className='p-1 w-[35px] h-[35px] text-[#454342]  cursor-pointer hover:text-[#00FF32] transition-all hover:p-0' />
            <FaYoutube className='p-1 w-[39px] h-[39px] text-[#454342]  cursor-pointer hover:text-[#00FF32] transition-all hover:p-0' />
    </div>
  )
}
