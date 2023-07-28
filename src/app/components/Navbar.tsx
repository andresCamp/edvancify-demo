import Link from 'next/link'
import React from 'react'
import {RiHome5Line, RiHome5Fill} from 'react-icons/ri'
import {VscLibrary} from 'react-icons/vsc'
import {LuLibrary} from 'react-icons/lu'


const Navbar = () => {
  return (
    <div className='flex items-center pt-1 fixed inset-x-0 bottom-0 shadow-top bg-white'>
      <ul className='flex justify-center gap-12 w-full px-4'>
        <li className='flex flex-col items-center p-2 cursor-pointer opacity-100 hover:opacity-50 focus:opacity-50 active:opacity-50'>
          <Link href='/'>
            <RiHome5Line size={27} />
            <p className='text-md items-center font-bold'>home</p>
          </Link>
        </li>
        <li className='flex flex-col items-center p-2 cursor-pointer opacity-100 hover:opacity-50 focus:opacity-50 active:opacity-50'>
          <Link href='/library'>
            <VscLibrary size={27}/>
            <p className='text-md items-center font-bold'>library</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};




 
export default Navbar
