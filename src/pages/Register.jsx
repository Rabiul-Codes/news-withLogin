import React, { useContext, useState } from 'react'
 import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { registerToaster } from '../Toaster/Toaster';
function Register() {
  const {registerUser}=useContext(AuthContext)
  const handleRegister =(e)=>{
      e.preventDefault();
      const Form = new FormData(e.currentTarget);
      const userName=Form.get('UserName') 
       const email = Form.get('email');
       const password = Form.get('password')
       const conformPassword = Form.get('conformPassword')
      //  console.log(userName,email,password,conformPassword)
      if(password !== conformPassword){
        registerToaster('conform password not match')
        return;
      }

      registerUser(email,password)
      //  registerToaster('Register success');
       .then((result)=>{
    // setUser(result.user);
       registerToaster('Register success');
   })
    .catch(error=>{
      registerToaster(error.message)
    })
  }
  return (
     <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" name='UserName' placeholder="Your Name" />
          <label className="label">Email</label>
          <input type="email" className="input" name='email'placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <label className="label">Conform password </label>
          <input type="password" className="input" name='conformPassword' placeholder="Conform password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
          <div className=' flex justify-between'>
            <h1>Have an account?</h1>
          <h1><NavLink to='/login'> Login</NavLink></h1>
          </div>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default Register;