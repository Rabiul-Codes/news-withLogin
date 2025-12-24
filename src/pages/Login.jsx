import React, { useContext } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { loginToaster } from '../Toaster/Toaster';

function Login() {
  
  const {userLogin,googleLogin}=useContext(AuthContext);
  // path navigate
  const location = useLocation();
  
const from = location.state?.from?.pathname || '/';
  const navigate =useNavigate()
  // console.log('location in login pages',from)
  const handleLogin=(e)=>{
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email');
    const password = form.get('password');
    // console.log(email,password)
    userLogin(email,password)
      .then((result)=>{
      // console.log(result.user)
     loginToaster('Login success');
     
     navigate(from,{replace:true});
    })
    .catch((error)=>{
      // console.log(error.code)
      loginToaster('Wrong Email or password')
      
      return
    }) 
  }
  const handleGoogleLogin=()=>{
    googleLogin()
    .then((result)=>{
        // setUser(result.user)
       })
       .catch((error)=>{
        loginToaster(error.message)
       })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <div className='flex justify-between'>
             <h1>Don't Have account?</h1>
             <h1><NavLink to='/register'>Register now</NavLink></h1>
          </div>
        </fieldset>
        </form>
        <div className='text-center'>
            <button onClick={handleGoogleLogin} className='btn text-2xl font-semibold bg-pink-300 rounded-2xl '>Login with google</button>
            </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login;