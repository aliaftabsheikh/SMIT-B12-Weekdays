import { useForm } from 'react-hook-form'
import './App.css'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod';


import { formSchema } from './schema/formSchema';


function App() {

  // const [showPassword, setShowPassword] = useState(false)




  async function submitHandler(data){

    await new Promise((resolve) => setTimeout(resolve, 3000));


    console.log(data)
  }

  const {register, handleSubmit, formState: {
    errors,
    isSubmitting
  }} = useForm({
    resolver: zodResolver(formSchema)
  })

  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='bg-gray-200 gap-5 flex flex-col items-center justify-center p-12 rounded-lg'>
        <h3 className='text-4xl font-bold'>Login </h3>

        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-5 my-4'>

          <input {...register('email')}  className='border-2 border-black p-3' type='text' placeholder='Enter your email'
          />
      
      {errors.email && <p className='text-red-400'>{errors.email.message}</p>}



          <input {...register('password')} className='border-2 border-black p-3'
          //  type={showPassword ? 'text': 'password'} 
          // 
          placeholder='Enter your password'

          />


{errors.password && <p className='text-red-400'>{errors.password.message}</p>}
          {/* <button onClick={() => setShowPassword(!showPassword)}>Show Password</button> */}



          <button
         disabled={isSubmitting}
           className='bg-slate-600 py-2 rounded-xl text-white text-2xl'>{isSubmitting ? 'Loading...' : 'Submit'}</button>
        </form>
      </div>
    </div>
  )
}

export default App