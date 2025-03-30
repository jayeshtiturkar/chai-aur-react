import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/jayeshtiturkar')
    //     .then(res => res.json())
    //     .then((data) =>{
    //         setData(data)
    //     })
    // }, [])
    
  return (
    <div className='text-center text-3xl m-4 p-4 bg-gray-600 text-white'> Github Follower {data.followers}
    <img src={data.avatar_url} alt="Git Pitcher" width={150}/>
    </div>
)
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/jayeshtiturkar')
    return response.json()
}