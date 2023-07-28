import React from 'react'

const AnalyticsTiles = () => {
  return (
    <div className='flex justify-center gap-2 bg-black py-6'>
        <div className="p-4 py-6 flex flex-col items-center justify-center shadow-xl rounded-xl bg-gradient-to-r from-[#B74B80] to-[#E54167]">
            <h1>95</h1>
            <p className=''>percentile</p>
        </div>
        <div className="p-4 py-6 flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-[#D5F0FF] to-[#B4DEF3]">
            <h1>0</h1>
            <p>completed</p>
        </div>
        <div className="p-4 py-6 flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-[#D5F0FF] to-[#B4DEF3]">
            <h1>0</h1>
            <p>day streak</p>
        </div>
    </div>

  )
}

export default AnalyticsTiles
