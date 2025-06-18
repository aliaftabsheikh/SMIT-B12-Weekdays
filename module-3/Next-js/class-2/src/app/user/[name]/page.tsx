import React from 'react'
import {Params} from '@/types/types'


const DynamicUser = ({params, searchParams}: Params) => {
    
    return (
    <div>{params.name}- {searchParams.age} - {searchParams.id}</div>
    
  )
}

export default DynamicUser