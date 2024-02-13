import { hashSync } from 'bcryptjs'
import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate,Link } from 'react-router-dom'

function Register() {
    let {register,handleSubmit,formState:{errors}} = useForm()
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
      <h2 className='text-info text-center'>User Registration</h2>
      <form action="" className='w-25 mx-auto mt-5 bg-light p-4 shadow-lg' onSubmit={handleSubmit(onRegisterFormSubmit)}>
       <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" name="username" id="username" className='form-control mb-4'  {...register("username",{required:true,minLength:4,maxLength:8})}/>
        {errors.username?.type==="required" && (<p className="text-danger">User Name is required</p>)}
          {errors.username?.type === "minLength" && (<p className='text-danger'>User Name minimum should contain 4 characters</p>)}
          {errors.username?.type === "maxLength" && (<p className='text-danger'>User Name maximum should contain 8 characters</p>)}
       </div>
       <div className="mb-3">
          <label htmlFor="password" className='form-label'>Password</label>
          <input type="password" name="password" id="password" {...register("password",{required:true})} className='form-control mb-4'/>
          {errors.password?.type==="required" && (<p className="text-danger">Password is required</p>)}
       </div>
       <div className="mb-3">
          <label htmlFor="email" className="formlabel">Email</label>
          <input type="email" name="email" id="email" className='form-control mb-4' {...register("email",{required:true})}/>
          {errors.email?.type==="required" && (<p className="text-danger">Password is required</p>)}
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
