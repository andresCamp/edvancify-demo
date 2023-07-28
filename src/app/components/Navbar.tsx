import Link from 'next/link'
import React from 'react'
import {RiHome5Line, RiHome5Fill} from 'react-icons/ri'
import {VscLibrary} from 'react-icons/vsc'
import {LuLibrary} from 'react-icons/lu'


const Navbar = () => {
  return (
    <div className='h-20 w-full border-b-2 flex items-center justify-between p-2 absolute inset-x-0 bottom-0'>
      <ul className='flex'>
        <li className='p-2 cursor-pointer'>
            <RiHome5Line/>
            <Link href='/'>Home</Link>
        </li>
        <li className='p-2 cursor-pointer'>
            <VscLibrary/>
            <Link href='/library'>Library</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
