
import viteLogo from '/vite.svg'
import './App.css'
import { useGetProductsQuery } from './services/fakeStoreApi'

function App() {

  const {data, isLoading, isError, refetch} = useGetProductsQuery()

  if(isLoading){
    return <h1>LOADING....</h1>
  }

  if(isError){
     return <h1>Something went wrong ....</h1>
  }

  console.log("DATA ==>", data);
  

  return (
    <>
     <div>PRODUCTS </div>

     {
      data?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
