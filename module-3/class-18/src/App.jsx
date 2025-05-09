// ================ CUSTOM VALIDATION ==============


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const [error, setError] = useState({
//     email: '',
//     password: ''
//   })

//   function handleSubmit(e){
//     e.preventDefault()

//     setError({email: '', password: ''})

//     if(!email.includes('@')){
//       setError((prev)=> ({...prev, email: 'Email must include @'}))
//       return;
//     }

//     if(password.length < 8){
//       setError((prev)=> ({...prev, password: 'Password must be at least 8 characters'}))
//       return
//     }


//     console.log("FORM SUBMITTED!")
//   }

//   return (
//     <div className='flex h-screen justify-center items-center'>
//       <div className='bg-gray-200 gap-5 flex flex-col items-center justify-center p-12 rounded-lg'>
//         <h3 className='text-4xl font-bold'>Login </h3>

//         <form onSubmit={handleSubmit} className='flex flex-col gap-5 my-4'>
//           <input className='border-2 border-black p-3' type='email' placeholder='Enter your email'
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           />
      
//         {error.email && <p className='text-red-500'>{error.email}</p>}



//           <input className='border-2 border-black p-3' type='password' placeholder='Enter your password'
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}

//           />

//       {error.password && <p className='text-red-500'>{error.password}</p>}


//           <button
         
//            className='bg-slate-600 py-2 rounded-xl text-white text-2xl'>SUBMIT</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default App




// ==================




import { useState } from 'react'

import './App.css'
import { useForm } from 'react-hook-form'



function App() {



  async function submitHandler(data){

    await new Promise((resolve) => setTimeout(resolve, 3000));


    console.log(data);
    
  }


  const {register, handleSubmit, formState: {
    errors,
    isSubmitting
  }} = useForm({
    defaultValues: {
      email: 'example@gmail.com',
      password: '12345678'
    }
  })


  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='bg-gray-200 gap-5 flex flex-col items-center justify-center p-12 rounded-lg'>
        <h3 className='text-4xl font-bold'>Login </h3>

        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-5 my-4'>
          <input className='border-2 border-black p-3' type='email' placeholder='Enter your email'
          {...register('email', {
            required: "Email required",
            validate: (value) => value.includes('@') || "Email must include @"
          })}

          />
      
      {errors.email && <span className='text-red-800'>{errors.email.message}</span>}



          <input className='border-2 border-black p-3' type='password' placeholder='Enter your password'
         
         {...register('password', {
          required: "Password required",
          

        })}

          />

{errors.password && <span className='text-red-800'>{errors.password.message}</span>}


          <button
          disabled={isSubmitting}
           className='bg-slate-600 py-2 rounded-xl text-white text-2xl'>{isSubmitting ? 'Loading....' : 'Submit'}
           </button>
        </form>
      </div>
    </div>
  )
}

export default App



