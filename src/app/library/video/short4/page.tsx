import React from 'react'
import { shortsData } from '../data'
import YouTubePlayer from '@/app/components/YouTubePlayer'
import Link from 'next/link';
import VideoSwiper from '@/app/components/VideoSwiper';

const page = () => {
    const short1Object = shortsData.find((item) => item.id === "short4");

  return (
    <div className='overflow-none'>
        <VideoSwiper index={4}>
            <YouTubePlayer youtubeLink={short1Object?.youtubeLink}/>
            <Link className='absolute top-5 left-1/2 transform -translate-x-1/2 text-2xl bg-black ring-1 ring-white text-white py-6 px-8 rounded-full z-50' 
                href={"/library"}>
                    X
            </Link>
            <Link className='absolute bottom-5 left-1/2 transform -translate-x-1/2 text-2xl bg-blue-500 text-white py-6 px-8 rounded-lg z-50' 
                href={"/library/question/question2"}>
                    Questions
            </Link>
        </VideoSwiper>
    </div>
  )
}


export default page