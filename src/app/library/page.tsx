import React from 'react'
import Navbar from '../components/Navbar'
import LessonTile from '../components/LessonTile'

const page = () => {
  return (
    <div className="">
      <div className='px-5 py-6 rounded-b-3xl bg-[#F3F5FA] flex items-center justify-center'>
        <h1 className='text-xl font-sans tracking-wider'>Library</h1>
      </div>

      <div className='mx-4 my-10'>
        <LessonTile title="Moles" description="Everything you need to know about moles"/>
      </div>  
    </div>
  )
}

export default page
