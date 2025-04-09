import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'

const Protected = ({children, authentication = true}) => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true);
    const userAuth  = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && userAuth !== authentication) {
            navigate("/login")
        }else if (!authentication && userAuth !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [userAuth,authentication,navigate]);
    
  return (
    loader ? <div>Loading...</div> : <>{children}</>
  )
}

export default Protected