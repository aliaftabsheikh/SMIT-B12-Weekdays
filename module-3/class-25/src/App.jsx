import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

const [data, setData] = useState([])
const [error, setError] = useState(null)
const [loading, setLoading] = useState(false)

const [addPostError, setAddPostError] = useState(null)


function fetchPosts(){
    // console.log("FETCHING POSTS ...")
  setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=> response.json())
    .then((data)=> setData(data))
    .catch((error)=> setError("ERROR ---->", error))
    .finally(()=> setTimeout(()=> {
      setLoading(false)
    }, 3000))
  }


useEffect(()=>{
  
  fetchPosts()
}, [])


function addPost(){
  try {
     fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'New Post',
      body: 'This is a new post created using fetch API'
    })
  })
  } catch (error) {
    setAddPostError(error)
    console.log("ERROR ---->", error)
  }
}

function updatePost(){
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: 1,
      title: 'Updated Post',
      body: 'This is an updated post using fetch API'
    })
  })
}

function deletePost(){
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })
  .then((response)=> response.json())
  .then((data)=> console.log("DELETE RESPONSE ---->", data))
  .catch((error)=> console.log("ERROR ---->", error))
}

if(loading){
  return <h1>Loading...</h1>
}

  return (
    <>
   <h1>Hello !</h1>

   <button onClick={addPost}>ADD POST !</button>

   {
    data.map((post) => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))
   }
    </>
  )
}

export default App
