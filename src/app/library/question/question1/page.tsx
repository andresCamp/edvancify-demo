import React from 'react'
import { shortsData } from '../../video/data'
import Question from '@/app/components/Question'
import Link from 'next/link'

const page = () => {
  return (
    <div className='overflow-scroll m-6 flex flex-col gap-8 mb-32'>
        <Link className="w-24 bg-black text-white py-2 px-4 rounded-lg" 
            href={"/library/video/short1"}>
            return
        </Link>
      <Question question={shortsData[0].questions[0]}/>
      <Question question={shortsData[0].questions[1]}/>
      <Question question={shortsData[0].questions[2]}/>
    </div>
  )
}

export default page


// uestionText: string;
//     correctAnswer: string;
//     options: string[];