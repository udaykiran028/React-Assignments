import React from 'react'
import {Link} from 'react-router-dom'

function Login() {

  return (
    <div>
      <h1 className='text-info text-center'>User Login</h1>
      <form action="" className='w-25 mx-auto mt-5 bg-light p-4 shadow-lg'>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" name="username" id="username" className='form-control mb-4' />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" id="password" className='form-control mb-4'/>
        </div>

        <button type='submit' className='btn btn-success text-light d-block mx-auto'>Login</button>
        <p className="lead text-center">
        New User 
        <Link to="/register" className="fs-4 px-3">
          Register
        </Link>
        here
      </p>
      </form>

     
    </div>
  )
}

export default Login
