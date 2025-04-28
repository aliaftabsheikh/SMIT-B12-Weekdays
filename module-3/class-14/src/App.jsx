// USE CONTEXT 

import React from 'react'
import ChildA from './components/ChildA'
import { createContext } from 'react'
import { useState } from 'react'


const UserContext = createContext()
const ThemeContext = createContext()

const App = () => {

  const [theme, setTheme] = useState('light')

  function toggleTheme(){
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
  <ThemeContext.Provider value={{theme, toggleTheme}}>
   <ChildA />
  </ThemeContext.Provider>

  )
}

export default App
export {ThemeContext}