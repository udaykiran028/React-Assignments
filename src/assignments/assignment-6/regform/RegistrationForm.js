import { useForm } from 'react-hook-form'
import { useState } from 'react'

function RegistrationForm() {
    let {register,handleSubmit,formState:{errors}} = useForm()
    function handleFormSubmit(){

    }
    return (
        <div className="bg-dark" style={{minHeight:'75rem'}}>
            <div className="col-sm-5 mx-auto">
                <h1 className="text-center text-primary">Registration Form</h1>
                <form className="rounded w-100 mx-auto mt-5 border p-4 bg-light shadow-lg" onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="row mb-3">                        
                        <div className="col">
                            <label htmlFor="firstname" className='form-label'>First Name</label>
                            <input type="text" id="firstname" className="form-control" {...register("firstname",{required:true,minLength:4,maxLength:6})}/>
                            {errors.firstname?.type==="required" && (<p className="text-danger">First Name is required</p>)}
                            {errors.firstname?.type === "minLength" && (<p className='text-danger'>First Name minimum should contain 4 characters</p>)}
                            {errors.firstname?.type === "maxLength" && (<p className='text-danger'>First Name maximum should contain 6 characters</p>)}
                        </div>
                       
                        <div className="col">
                            <label htmlFor="lastname" className='form-label'>Last Name</label>
                            <input type="text" id="lastname" className="form-control" {...register("lastname",{required:true,minLength:4,maxLength:6})} />
                            {errors.lastname?.type === "required" && (<p className='text-danger'>Last Name is required</p>)}
                            {errors.lastname?.type === "minLength" && (<p className='text-danger'>Last Name minimum should contain 4 characters</p>)}
                            {errors.lastname?.type === "maxLength" && (<p className='text-danger'>Last Name maximum should contain 6 characters</p>)}
                        </div>                        
                    </div>
                    <div className="row mb-3">                        
                        <div className="col">
                            <label htmlFor="birthday" className='form-label'>Birthday</label>
                            <input type="date" id="birthday" className="form-control" {...register("birthday",{required:true})}/>
                            {errors.birthday?.type==="required" && (<p className='text-danger'>Birthday is Required</p>)}
                        </div>
                        <div className="col">
                            <label htmlFor="gender" className='form-label'>Gender</label>
                            <div className="d-flex">
                                <div className="form-check me-3">
                                    <input type="radio" id="m" className="form-check-input" value="male" {...register("gender",{required:true})}/>
                                    <label htmlFor="m" className="form-check-label">Male</label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" id="f" className="form-check-input" value="female" {...register("gender",{required:true})} />
                                    <label htmlFor="f" className="form-check-label">Female</label>
                                </div>                               
                            </div>
                            {errors.gender?.type==="required" && (<p className='text-danger'>Gender is required</p>)}
                        </div>                        
                    </div>
                    <div className="row mb-3">                        
                        <div className="col">
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="email" id="email" className="form-control" {...register("email",{required:true})}/>
                            {errors.email?.type ==="required" && (<p className='text-danger'>Email is required</p>)}
                        </div>
                        <div className="col">
                            <label htmlFor="phno" className='form-label'>Phone Number</label>
                            <input type="number" id="phno" className="form-control" {...register("phno",{required:true,min:10,max:10})}/>
                            {errors.phno?.type === "required" && (<p className='text-danger'>Phone Number is required</p>)}
                            {errors.phno?.type === "min" && (<p className='text-danger'>Phone number length should be 10</p>)}
                            {errors.phno?.type === "max" && (<p className='text-danger'>Phone number length should be 10</p>)}
                        </div>                        
                    </div>
                    <div className="row mb-3">                        
                        <div className="col">
                            <label htmlFor="subject" className='form-label'>Subject</label>
                            <select  id="subject" className="form-select" defaultValue="choose option" {...register("subject",{required:true})}>
                                <option value="choose option" disabled>Choose Option</option>
                                <option value="web development">Web Development</option>
                                <option value="java">Java</option>
                                <option value="python">Python</option>
                            </select>
                        </div>    
                        {errors.subject?.type === "required" && (<p className='text-danger'>Select subject</p>)}                                           
                    </div>                    
                    <button type="submit" className="btn btn-success">Submit</button>                   
                </form>
            </div>
        </div>

    )
}

export default RegistrationForm
