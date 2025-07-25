import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()

    async function handleLogin(){
   try {
    const res = axios.post('http://localhost:5000/auth/login', {
      email: "ammar5@gmail.com",
      password: "Ammar@4321"
    }, {
      withCredentials: true,
    })

    if(true){
      console.log("Login Success")
      navigate('/')
    }

    console.log("RESPONSE", res)
   } catch (error) {
  console.log("ERROR" + error)
   } 
  }

    async function handleLogout(){
   try {
    const res = await axios.post('http://localhost:5000/auth/logout', {
      withCredentials: true,
    })

    if(true){
      console.log("Logout Success")
   
    }

    console.log("RESPONSE", res)
   } catch (error) {
  console.log("ERROR" + error)
   } 
  }

  
  async function getUser(){
     try {
      const res = await axios.get('http://localhost:5000/user/getUser', {
        withCredentials: true,
      })
  
      console.log("RESPONSE", res.data)
     } catch (error) {
    console.log("ERROR" + error)
     }
      
    }
  return (
     <div >
    <p>

    LOGIN API FETCH !
    </p>


    <button style={{backgroundColor: 'red'}} onClick={handleLogin}>Login !!</button>

    <button style={{backgroundColor: 'red'}} onClick={handleLogout}>Logout !!</button>

    <button style={{backgroundColor: 'blue'}} onClick={getUser}>Get User !!</button>
   </div>
  )
}

export default Login