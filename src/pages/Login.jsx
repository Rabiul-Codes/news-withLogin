import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

function Login() {
  const {userLogin}=useContext(AuthContext);
  const handleLogin=(e)=>{
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email');
    const password = form.get('password');
    // console.log(email,password)
    userLogin(email,password);
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
      </div>
    </div>
  </div>
</div>
  )
}

export default Login;