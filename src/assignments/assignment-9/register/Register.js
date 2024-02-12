import { hashSync } from 'bcryptjs'
import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate,Link } from 'react-router-dom'

function Register() {
    let {register,handleSubmit} = useForm()
    let navigate = useNavigate()

    function onRegisterFormSubmit(newUser){
        let hashedPassword = hashSync(newUser.password)

        newUser.password = hashedPassword

        fetch('http://localhost:4000/users',{
          method:"POST",
          headers:{"Content-Type":"application/jsno"},
          body:JSON.stringify(newUser)
        })
        .then(res=>{
          if(res.status===201)
          navigate("/login")
        })
        .catch(err=>console.log("err in registration:",err))
    }
  return (
    <div>
      <h1 className='display-3 text-info text-center'>User Registration</h1>
      <form action="" className='w-50 mx-auto mt-5 bg-light p-4' onSubmit={handleSubmit(onRegisterFormSubmit)}>
       <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" name="username" id="username" className='form-control mb-4'  {...register("username")}/>
       </div>
       <div className="mb-3">
          <label htmlFor="password" className='form-label'>Password</label>
          <input type="text" name="password" id="password" {...register("password")} className='form-control mb-4'/>
       </div>
       <div className="mb-3">
          <label htmlFor="email" className="formlabel">Email</label>
          <input type="email" name="email" id="email" className='form-control mb-4' {...register("email")}/>
       </div>

       <button type="submit" className='btn btn-sucess btn-info text-secondary d-block mx-auto fs-5'>Register</button>
      </form>

      <p className="lead text-center">
        Already registered !
         <Link to='/login' className="fs-4 ps-3">Login</Link>
      </p>
    </div>
  )
}

export default Register
