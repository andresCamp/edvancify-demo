import React from 'react'
import Image from 'next/image'
import { FiSettings } from 'react-icons/fi'


const Header = () => {


  return (
    // <div className='h-20 w-full border-b-2 flex items-center justify-between p-2'>
    <div className='w-full h-10 flex gap-1 items-center justify-center bg-[#F3F5FA] shadow-none'>

        <Image
          src="/edvancifyicon.png"
          alt="Edvancify Logo"
          width={25}
          height={25}
        />
        <p className='font-bold text-xl'>edvancify</p>
        {/* <FiSettings/> */}
    </div>
  )
}

export default Header
