import React from 'react'
import { shortsData } from '../data'
import YouTubePlayer from '@/app/components/YouTubePlayer'
import Link from 'next/link';
import VideoSwiper from '@/app/components/VideoSwiper';

const page = () => {
    const short1Object = shortsData.find((item) => item.id === "short1");

  return (
    <VideoSwiper index={1}>
        <div>
            <YouTubePlayer youtubeLink={short1Object?.youtubeLink}/>
            <Link className='absolute top-5 left-1/2 transform -translate-x-1/2 text-2xl bg-black ring-1 ring-white text-white py-4 px-6 rounded-full z-50' 
                href={"/library"}>
                    X
            </Link>
            <Link className='absolute bottom-5 left-1/2 transform -translate-x-1/2 text-xl bg-blue-500 text-white py-4 px-6 rounded-lg z-50' 
                href={"/library/question/question1"}>
                    Questions
            </Link>
        </div>
    </VideoSwiper>
  )
}


export default page