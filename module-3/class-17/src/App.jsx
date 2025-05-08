import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CarouselComponent from './components/CarouselComponent'


const allPath = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
    <Navbar/>

    <Hero/>
    <CarouselComponent/>
    </>
  },

  {
    path: "/about",
    element: <>
        <Navbar/>

     <h1>About</h1>
    </>,
  },

  {
    path: '/services',
    element: <>
        <Navbar/>

      <h1>Services</h1>
    </>,
  },

  {
    path: '/contact',
    element: <>
    <Navbar/>

  <h1>Contact</h1>
</>
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={allPath}/>
    </>
  )
}

export default App
