import Link from 'next/link'
import React from 'react'
import {RiHome5Line, RiHome5Fill} from 'react-icons/ri'
import {VscLibrary} from 'react-icons/vsc'
import {LuLibrary} from 'react-icons/lu'


const Navbar = () => {
  return (
    <div className=' flex items-center p-2 absolute inset-x-0 bottom-0 shadow-top'>
  <ul className='flex justify-center gap-12 w-full px-4'>
    <li className='flex flex-col items-center align-center  p-2 cursor-pointer opacity-100 hover:opacity-50 focus:opacity-50 active:opacity-50'>
        <RiHome5Line size={42} />
        <Link className='text-lg font-bold' href='/'>home</Link>
    </li>
    <li className='p-2 cursor-pointer flex flex-col items-center align-center opacity-100 hover:opacity-50 focus:opacity-50 active:opacity-50'>
        <VscLibrary size={42}/>
        <Link className='text-lg font-bold' href='/library'>library</Link>
    </li>
  </ul>
</div>



  )
}

export default Navbar
