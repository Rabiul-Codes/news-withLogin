import React from 'react'

function Register() {

  const handleRegister =(e)=>{
      e.preventDefault();
      // console.log(e.currentTarget);
      const Form = new FormData(e.currentTarget);
      // console.log(Form.get('email'));

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
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default Register;