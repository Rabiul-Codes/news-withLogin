import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function PrivetRoute({children}) {
    const {user,loading} = useContext(AuthContext)
    const location =  useLocation();

    // console.log(location)

    if(user){
        return children;
    }
  return <Navigate 
  to='/login'
  state={{from:location} }
  replace
    ></Navigate>
  
}

export default PrivetRoute