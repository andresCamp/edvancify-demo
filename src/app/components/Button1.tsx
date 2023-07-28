import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const Button1 = () => {
  return (
    <div className='flex gap-4 hover:ring-2 font-light items-center p-3 px-4 align-center ring-1 ring-white rounded-2xl '>
      <p>begin</p>
      <BsArrowRight />
    </div>
  )
}

export default Button1