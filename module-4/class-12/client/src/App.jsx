import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/login'





function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,

  },
  {
    path: "/login",
    element: <Login/>,

  },
]);




async function getUser(){
   try {
    const res = await axios.get('http://localhost:5000/user/getUser', {
      withCredentials: true,
    })

    console.log("RESPONSE", res)
   } catch (error) {
  console.log("ERROR" + error)
   }
    
  }

  return (
      <RouterProvider router={router} />

 
  )
}

export default App
