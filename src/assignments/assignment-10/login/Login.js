import React from 'react'
import {useForm} from 'react-hook-form'
import {Link,useNavigate} from 'react-router-dom'
import {compareSync} from 'bcryptjs'

function Login() {
  let {register,handleSubmit} = useForm()
  let navigate = useNavigate()

  function onLoginFormSubmit(userCredentialsObject){
    fetch(`http://localhost:4000/users?username=${userCredentialsObject.username}`,{method:"GET"}
    )
    .then((res)=>res.json())
    .then((userObjArray)=>{
      if(userObjArray.length===0){
        alert("Invalid username")
      }else{
        let result = compareSync(userCredentialsObject.password,userObjArray[0].password)

        if(result === true){
          navigate(`/user-dashboard/${userCredentialsObject.username}`,{state:userObjArray[0]})
        }else{
          alert("Invalid password")
        }
      }
    })
  }
  return (
    <div>
      <h1 className='text-info text-center'>User Login</h1>
      <form action="" className='w-25 mx-auto mt-5 bg-light p-4 shadow-lg' onSubmit={handleSubmit(onLoginFormSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" name="username" id="username" className='form-control mb-4' {...register("username")}/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" id="password" className='form-control mb-4' {...register("password")}/>
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
