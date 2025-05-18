import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginForm } from './components/login-form'
import { addTodo, removeTodo, updateTodo } from './features/todoSlice'
import { useDispatch , useSelector} from 'react-redux'
import { Button } from './components/ui/button'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from './components/ui/input'
import { DialogClose } from '@radix-ui/react-dialog'


function App() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = (e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    console.log(input);
  }

  const handleRemoveTodo = (id)=>{
    dispatch(removeTodo(id))
    console.log(id);
  }

  const handleUpdateTodo =(id)=>{
    dispatch(updateTodo({
      id,
      text: input,
    }))
  }

  return (
    <>
   <LoginForm setInput={setInput} handleTodo={handleAddTodo}/>

   {
    todos.map((item)=>(
      <div key={item.id} className='flex justify-between my-4 p-4 bg-slate-600 items-center rounded-xl text-white'>
        <p>{item.text}</p>

        <div className='flex gap-4'>
         
          <Button onClick={()=> handleRemoveTodo(item.id)} variant='destructive'>Delete Todo</Button>

                  <Dialog>
  <DialogTrigger>Update Todo !</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Update Todo !</DialogTitle>
      <DialogDescription>
       Add your desire Todo !
      </DialogDescription>
    </DialogHeader>

     <div className="grid gap-3">
                <Input onChange={(e)=> setInput(e.target.value)} id="email" type="text" placeholder="ADD TODO" required />
              </div>

<DialogClose>
               <Button onClick={()=> handleUpdateTodo(item.id)}>Update Todo
                
               </Button>
               </DialogClose>
  </DialogContent>
</Dialog>
        </div>




      </div>
     
    ))
   }
    </>
  )
}

export default App
