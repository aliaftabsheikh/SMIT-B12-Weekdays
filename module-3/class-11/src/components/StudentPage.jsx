import React from 'react'
import {useParams} from "react-router-dom"

const StudentPage = () => {

   const {id} = useParams()
  return (
    <div>StudentPage - {id}</div>
  )
}

export default StudentPage