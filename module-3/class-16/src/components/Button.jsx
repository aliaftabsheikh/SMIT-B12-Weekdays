import React from 'react'

const Button = ({text}) => {
  return (
    <button className="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 ease-in-out my-2">
     {text}
    </button>
  )
}

export default Button