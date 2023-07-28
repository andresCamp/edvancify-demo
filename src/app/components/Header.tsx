import React from 'react'
import Image from 'next/image'
import { FiSettings } from 'react-icons/fi'


const Header = () => {


  return (
    // <div className='h-20 w-full border-b-2 flex items-center justify-between p-2'>
    <div className='h-20 w-full border-b-2 flex items-center justify-center p-2 bg-[#F3F5FA] shadow-none'>

        <Image
          src="/edvancify.svg"
          alt="Edvancify Logo"
          width={100}
          height={100}
        />
        {/* <FiSettings/> */}
    </div>
  )
}

export default Header
