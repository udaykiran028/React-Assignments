import React from 'react'
import {Link} from 'react-router-dom'
function Register() {
   
  return (
    <div>
      <h2 className='text-info text-center'>User Registration</h2>
      <form action="" className='w-25 mx-auto mt-5 bg-light p-4 shadow-lg'>
       <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" name="username" id="username" className='form-control mb-4' />
       </div>
       <div className="mb-3">
          <label htmlFor="password" className='form-label'>Password</label>
          <input type="password" name="password" id="password"  className='form-control mb-4'/>
       </div>
       <div className="mb-3">
          <label htmlFor="email" className="formlabel">Email</label>
          <input type="email" name="email" id="email" className='form-control mb-4'/>
       </div>

       <button type="submit" className='btn btn-sucess btn-success text-light d-block mx-auto fs-5'>Register</button>

       <p className="lead text-center">
        Already registered !
         <Link to='/login' className="fs-4 ps-3">Login</Link>
      </p>
      </form>

    
    </div>
  )
}

export default Register
