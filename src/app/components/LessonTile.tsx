// import React from 'react'

// const LessonTile = () => {
    //   return (
        //     <div>
        //        <Image
        //           src="/edvancify.svg"
        //           alt="Edvancify Logo"
        //           width={100}
        //           height={100}
        //         />
        //         <div>
        //             <h3>Moles</h3>
        //             <p></p>
        //         </div>
        //     </div>
        //   )
        // }
        
        // export default LessonTile
        
'use client'
import React from 'react'
import Image from 'next/image'
import Button1 from './Button1';
import ProgressBar from '@ramonak/react-progress-bar';

type LessonTileProps = {
    title: string;
    description: string;

  };

const AnalyticsTile: React.FC<LessonTileProps> = ({ title, description }) => {
  return (
    <div className='rounded-xl bg-[#CDE7FB]  flex flex-col items-center justify-center'>
        <div className='flex justify-center py-5 items-center -mb-24'>
            <Image
                src="/mole.png"
                alt="mole"
                width={225}
                height={225}
            />
        </div>

        <div className='flex'>
            <div className='flex flex-row p-4 py-8 m-3 gap-6 text-white content-end align-end rounded-xl backdrop-blur-xs bg-[#0068FF] bg-opacity-50'>
                <div>
                    <h1 className='text-3xl'>{title}</h1>
                    <p className="text-s font-sans font-light text-opacity-50 tracking-wide">{description}</p>
                    {/* <ProgressBar completed={60} bgColor="white" /> */}
                
                </div>
                <div className='flex items-center justify-center gap-8'>
                    <Button1/>
                </div>

            </div>

        </div>

    </div>
  )
}

export default AnalyticsTile


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