import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
export default function Companydata() {
  return (
    <>
        <div className='h-full flex text-white justify-center items-center'>
            <CiLocationOn className='text-white h-full w-10' />
            <div className='ml-5'>
                <p className='md:text-xl text-[15px]'>Onesta Group Sp. z o.o.</p>
                <p className='md:text-md text-[12px] md:leading-4 leading-2'>53-148 Wrocław <br></br>ul. Wolbromska 18/1b</p>
                </div>
        </div>
    </>
  )
}
