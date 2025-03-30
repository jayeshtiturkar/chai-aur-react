import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams(0)
  return (
    <div>User :{id}</div>
  )
}

export default User