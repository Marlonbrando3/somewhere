import React from 'react'
import { useRef } from 'react'
import {MdOutlinePhone} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FaFacebookMessenger} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import Companydata from './companydata'

export default function Footer() {

  const phone = useRef();
  const whatsApp = useRef();
  const messenger = useRef();
  const mail = useRef();

  const handlePhone = () => {
    phone.current.style.width = "170px"
  }
  const handleWA = () => {
    whatsApp.current.style.width = "100px"
  }
  const handleMessenger= () => {
    messenger.current.style.width = "100px"
  }
  const handleMail = () => {
    mail.current.style.width = "200px"
  
  }

  const handleHide = ()=>{
    phone.current.style.width = "0px"
    whatsApp.current.style.width = "0px"
    messenger.current.style.width = "0px"
    mail.current.style.width = "0px"

  }

  return (
    <div className='bg-[#454342] md:h-[100px] h-[200px] w-screen overflow-x-hidden'>
      <div className='w-11/12 md:h-full h-1/2 mx-auto flex justify-between items-center py-4'>
        <div id="contact-icons" className='h-full flex text-white '>
          <div onMouseOver={handlePhone} onMouseLeave={handleHide} className="cursor-pointer flex">
              <MdOutlinePhone className='icon-footer cursor-pointer'/>
              <div ref={phone} name="phone" className='footer-data font-bold h-full duration-300 flex items-center overflow-hidden relative'>
                <a href="tel:+48669030430" className='absolute w-[170px] leading-4'>Zadzwoń <br></br>+48 669 030 430</a>
              </div>
          </div>
          <div onMouseOver={handleWA} onMouseLeave={handleHide} className="cursor-pointer flex">
            <BsWhatsapp className='icon-footer cursor-pointer'/>
            <div ref={whatsApp} name="WhatsApp" className='footer-data font-bold duration-300 h-full flex  items-center overflow-hidden relative'>
              <a href="https://wa.me/+48669030430" target="_blank" className='absolute w-[140px] leading-4'>Napisz na WhatsApp</a>
            </div>
          </div>
          <div onMouseOver={handleMessenger} onMouseLeave={handleHide} className="cursor-pointer flex">
            <FaFacebookMessenger onClick={handleMessenger} className='icon-footer cursor-pointer'/>
            <div ref={messenger} name="Messenger" className='footer-data duration-300 font-bold h-full flex items-center overflow-hidden relative'>
              <a href="https://m.me/rafalmarszalek87" target="_blank" className='absolute w-[140px] leading-4'>Napisz na Messenger</a>
            </div>
          </div>
          <div onMouseOver={handleMail} onMouseLeave={handleHide} className="cursor-pointer flex">
            <FiMail onClick={handleMail} className='icon-footer cursor-pointer'/>
            <div ref={mail} name="mail" id="company" className='footer-data duration-300 font-bold h-full flex items-center overflow-hidden relative'>
              <a href="mailto:biuro@somewhere.pl" target="_blank" className='absolute w-[200px] leading-4'>Napisz maila biuro@somewhere.pl</a>
            </div>
          </div>
        </div>
        <span className='hidden md:block'><Companydata /></span>
        {/* <div className='h-full flex text-white'>
            <CiLocationOn className='text-white h-full w-10' />
          <div className='ml-5'>
            <p className='text-xl'>Onesta Group Sp. z o.o.</p>
            <p className='leading-4'>53-148 Wrocław <br></br>ul. Wolbromska 18/1b</p>
          </div>
        </div> */}
      </div>
      <span className='block md:hidden'><Companydata /></span>
    </div>
  )
}
