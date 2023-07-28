'use client'
import React, { useEffect, useState } from 'react';

// Define your colors
const colors = ["red", "yellow", "green", "blue", "indigo", "purple", "pink"];

const Loading = () => {
  const [color, setColor] = useState('');

  // Change color every second
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random color
      const newColor = colors[Math.floor(Math.random() * colors.length)];

      // Set the new color
      setColor(newColor);
    }, 300);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className={`text-2xl tracking-wide font-sans font-bold text-${color}-600 animate-pulse`}>
        Loading
      </div>
    </div>
  );
};

export default Loading;


// example 
// async function fetchRepos (params:type) {
//     const response = await fetch(
//         'URL'
//     )

//     await new Promise((resolve) => setTimeout(resolve, 1000))
    
//     const repos = await response.json()
//     return repos
// }

// const ReposPage = async () => {
//     const repos = await fetchRepos()

//     return (
//         <div>
//             <h3>title</h3>
//             <ul>
//                 {repos.map((repo) => (
//                     <li key={repo.id}>
//                         {repo.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }