'use client'
import React, { useState, useEffect, useRef } from 'react';

type AnalyticsTileProps = {
  num: number;
  tag: string;
  expandedText: string;
  color1: string;
  color2: string;
};

const AnalyticsTile: React.FC<AnalyticsTileProps> = ({ num, tag, expandedText, color1, color2 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const tileRef = useRef<HTMLDivElement>(null); // specify the type for tileRef

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  const handleClickOutside = (event: MouseEvent) => { // specify the type for event
    if (tileRef.current && !tileRef.current.contains(event.target as Node)) { // event.target must be cast to Node
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const containerClass = isExpanded ? 'scale-150' : 'scale-100';

  return (
    <div ref={tileRef} onClick={handleToggleExpand} className={`transition-transform duration-500 ease-in-out ${containerClass}`}>
      <div 
        className={`p-4 py-6 flex text-white flex-col items-center animate-fadeIn justify-center shadow-lg rounded-xl bg-gradient-to-r from-color1 to-color2 cursor-pointer`}
      >
        {/* Display different text depending on whether the tile is expanded or not */}
        {isExpanded ? <p className="text-xs font-sans font-light tracking-wider">{expandedText}</p> : 
        <>
          <h1 className='text-3xl'>{num}</h1>
          <p className="text-xs font-sans font-light tracking-wider">{tag}</p>
        </>}
      </div>
    </div>
  )
}

export default AnalyticsTile;





















// export default AnalyticsTile


// import React, { useState } from 'react'

// type AnalyticsTileProps = {
//   num: number;
//   tag: string;
//   color1: string;
//   color2: string;
// };

// const AnalyticsTile: React.FC<AnalyticsTileProps> = ({ num, tag, color1, color2 }) => {
//   const [showPopup, setShowPopup] = useState(false);

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   }

//   return (
//     <div>
//       <div 
//         className={`p-4 py-6 flex text-white flex-col items-center animate-fadeIn justify-center shadow-lg rounded-xl bg-gradient-to-r from-[${color1}] to-[${color2}] cursor-pointer`}
//         onClick={togglePopup}
//       >
//         <h1 className='text-3xl'>{num}</h1>
//         <p className="text-xs font-sans font-light tracking-wider">{tag}</p>
//       </div>
//       {
//         showPopup && 
//         <div 
//           className={`fixed top-0 left-0 w-full h-full flex items-center justify-center p-6 bg-black bg-opacity-50`}
//           onClick={togglePopup}
//         >
//           <div 
//             className={`p-6 rounded bg-gradient-to-r from-[${color1}] to-[${color2}] text-white`}
//           >
//             <p>Popup content goes here...</p>
//           </div>
//         </div>
//       }
//     </div>
//   )
// }

// export default AnalyticsTile;
