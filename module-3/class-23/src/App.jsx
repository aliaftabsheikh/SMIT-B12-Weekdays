import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCreatePostMutation, useGetPostsQuery } from './services/jsonPlaceholderApi'

function App() {

  const [postData, setPostData] = useState({
    title: '',
    body: ''
  })

  const {data, isLoading, error } = useGetPostsQuery()
  const [createPost, {isLoading: createLoading, error: createError, }] =useCreatePostMutation()

  const handleSubmit = async (e) => {
    await createPost(postData)
  }

  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>Something went wrong !</h1>
  }

  return (
    <>
    <h1>POSTS</h1>

    <div>
      <input type="text" placeholder='TITLE' onChange={(e)=> setPostData((prev)=> ({...prev, title: e.target.value}))} />


      <input type="text" placeholder='BODY' onChange={(e)=> setPostData((prev)=> ({...prev, body: e.target.value}))}  />

      <button onClick={handleSubmit}>SUBMIT</button>
    </div>

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
