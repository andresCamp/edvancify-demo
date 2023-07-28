import React from 'react'

type AnalyticsTileProps = {
    num: number;
    tag: string;
    color1: string;
    color2: string;
  };

const AnalyticsTile: React.FC<AnalyticsTileProps> = ({ num, tag, color1, color2 }) => {
  return (
    <div>
      {/* <div className="p-4 py-6 flex flex-col items-center justify-center shadow-xl rounded-xl bg-gradient-to-r from-[#B74B80] to-[#E54167]"> */}
      <div className={`p-4 py-6 flex text-white flex-col items-center justify-center shadow-lg rounded-xl bg-gradient-to-r from-[${color1}] to-[${color2}]`}>
            <h1 className='text-3xl'>{num}</h1>
            <p className="text-xs font-sans font-light tracking-wider">{tag}</p>
        </div>
    </div>
  )
}

export default AnalyticsTile
