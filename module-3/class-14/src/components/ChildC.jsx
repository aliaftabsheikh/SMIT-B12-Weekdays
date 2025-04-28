import React from 'react'
import { ThemeContext } from '../App'
import { useContext } from 'react'




const ChildC = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
   
    
  return (
    <div className={`h-screen flex justify-center items-center flex-col ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
    <div className='text-6xl'>{theme}</div>

    <button  className='mt-4 bg-amber-800 text-5xl py-4 px-6 rounded-full text-white' onClick={toggleTheme}>
      Toggle Theme
    </button>
    </div>
  )
}

export default ChildC