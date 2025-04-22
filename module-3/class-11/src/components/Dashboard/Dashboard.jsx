import React, {useEffect} from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'


const Dashboard = () => {

  const navigate = useNavigate()

  const isLoggedIn = true 

  useEffect(() => {
    if(!isLoggedIn){
      navigate('/')
    }
  }, [])
  

  return (
    <div className='flex'>
    <div className='bg-slate-600 w-[320px] text-white h-screen  font-bold' >

      <h1 className='text-center text-4xl mt-10'>Dashboard</h1>

<ul className='flex flex-col gap-4 mt-10 ml-10 text-2xl font-medium'>
  <li><Link to="/dashboard/order">Orders</Link></li>
  <li><Link to="/dashboard/products">Products</Link></li>
  <li><Link to="/dashboard/transactions">Transactions</Link></li>
</ul>

</div>


    <Outlet/>
    </div>
  ) 
}

export default Dashboard