import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (

     <div className='sm:bg-amber-200 max-md:bg-green-400  max-lg:text-center max-lg:text-6xl max-xl:bg-pink-500 6xl:bg-apna-color apna:bg-black apna:text-white'>Hello World !</div>

  //  <div className='max-sm:bg-red-700 max-md:bg-green-400  max-lg:text-center max-lg:text-6xl max-xl:bg-pink-500 6xl:bg-apna-color '>Hello World !</div>


  // <div className='flex justify-center items-center h-screen'>
  //   <div className="w-96 h-56 bg-gray-200 rounded-3xl bg-[url(https://cdn.ferrari.com/cms/network/media/img/resize/6319eb192f9a532677cbe3c4-ferrari-purosangue-social-card-intro-share?width=1080)] bg-center "></div>
  // </div>


//   <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl mt-10">
//   <div className="md:flex">
//     <div className="md:shrink-0">
//       <img
//         className="h-48 w-full object-cover md:h-full md:w-48"
//         src="https://cdn.ferrari.com/cms/network/media/img/resize/6319eb192f9a532677cbe3c4-ferrari-purosangue-social-card-intro-share?width=1080"
//         alt="Modern building architecture"
//       />
//     </div>
//     <div className="p-8">
//       <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
//       <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
//         Incredible accommodation for your team
//       </a>
//       <p className="mt-2 text-gray-500">
//         Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
//         places to do just that.
//       </p>
//     </div>
//   </div>
// </div>
  )
}

export default App
