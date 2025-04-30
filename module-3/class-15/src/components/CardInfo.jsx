import React from 'react'

const CardInfo = ({setName}) => {
  return (
    <div className='flex justify-center items-center  '>
        <p>CHILD FIELD  : </p>
        <input onChange={(e)=> setName(e.target.value)} className='border-1 px-3 py-4' placeholder='Enter your name'/>
    </div>
  )
}

export default CardInfo