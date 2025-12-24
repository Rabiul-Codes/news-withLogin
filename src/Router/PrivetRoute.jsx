import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

function PrivetRoute({children}) {
    const {user,loading} = useContext(AuthContext)
    const location =  useLocation();
    // console.log(location)
    const locationPath = location.pathname

    if(user){
        return children;
    }
  return <Navigate state={locationPath} to='/login' ></Navigate>
  
}

export default PrivetRoute