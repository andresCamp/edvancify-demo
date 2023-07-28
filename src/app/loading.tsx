import React from 'react'

const loading = () => {
  return (
    <div>
      Loading
    </div>
  )
}

export default loading


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