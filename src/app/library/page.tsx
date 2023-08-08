'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import LessonTile from '../components/LessonTile'
import { lessonData } from "./lessons"

const page = () => {
  console.log("lessonData")
  console.log(lessonData)
  return (
    <div className="">
      <div className='px-5 py-6 rounded-b-3xl bg-[#F3F5FA] flex items-center justify-center'>
        <h1 className='text-xl font-sans tracking-wider'>Library</h1>
      </div>
      <div className='flex flex-col gap-6 mx-6 my-10'>
      {lessonData.map((lesson) => (
        <LessonTile
          key={lesson.id}
          title={lesson.title}
          description={lesson.description} // Correcting typo in the description
          src={lesson.src}
          color1={lesson.color1}
        />
      ))}
        {/* <LessonTile title="Moles" description="Everything you need to know about moles" src="/mole.png"/>
        <LessonTile title="Organic Chemistry" description="Everything you need to know about moles" src="/mole.png"/>
        <LessonTile title="Acids and Bases" description="Everything you need to know about moles" src="/mole.png"/>
        <LessonTile title="Energetics" description="Everything you need to know about moles" src="/mole.png"/>
        <LessonTile title="Qualitative Chemistry" description="Everything you need to know about moles" src="/mole.png"/> */}
      </div>  
    </div>
  )
}

export default page
