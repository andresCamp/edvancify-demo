'use client'
import React from 'react'
import Image from 'next/image'
import Button1 from './Button1';
import ProgressBar from '@ramonak/react-progress-bar';

type LessonTileProps = {
    title: string;
    description: string;
    src: string;
    color1: string;

  };

  
  const LessonTile: React.FC<LessonTileProps> = ({ title, description, src, color1 }) => {
    console.log(color1)
    
    function hexToRGB(hex: string): string | null {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
      }
      

  return (
    <div style={{background: `rgba(${hexToRGB(color1)}, 0.3)`}} className='rounded-xl bg-[#CDE7FB] animate-fadeIn flex flex-col items-center justify-center'>
        <div className='flex justify-center py-5 items-center -mb-24'>
            <Image
                src={src}
                alt="mole"
                width={225}
                height={225}
            />
        </div>

        <div className='flex'>
            <div style={{background: `${color1}`}} className={`flex flex-row p-6 py-4 m-3 gap-4 animate-fadeIn text-white content-end align-end rounded-xl backdrop-blur-xs bg-[${color1}] bg-opacity-75`}>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl'>{title}</h1>
                    <p className="text-s font-sans font-light text-opacity-50 tracking-wide">{description}</p>


                </div>
                <div className='flex items-center justify-center gap-6'>
                    <Button1/>
                </div>

            </div>

        </div>

    </div>
  )
}

export default LessonTile


{/* <div className='rounded-xl bg-[#CDE7FB]'>
        <Image
        src="/edvancify.svg"
        alt="Edvancify Logo"
        width={100}
        height={100}
    />

        <div className={`p-4 py-6 m-3 flex text-white flex-col items-left justify-center shadow-lg rounded-xl  bg-[#0068FF] bg-opacity-50`}>
        <h1 className='text-3xl'>{title}</h1>
        <p className="text-xs font-sans font-light tracking-wider">{description}</p>
        
        <div className='flex items-center content-around gap-8'>
            <ProgressBar completed={60} bgColor="white" />
            <Button1/>
        </div>
    </div>

</div> */}