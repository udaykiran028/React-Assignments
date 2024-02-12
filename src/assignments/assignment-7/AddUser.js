import { useForm } from 'react-hook-form'
import UserList from './UserList'
import { useState } from 'react'

function AddUser() {

    let [usersList, setUser] = useState([])
    let { register, handleSubmit, formState: { errors } } = useForm()
    function handleFormSubmit(userObj) {
        setUser([...usersList, userObj])
    }
    return (
        <div style={{ minHeight: '75rem' }}>
            <div className="row">
                <div className="col col-sm-4 mx-auto">
                    <h1 className="text-center text-primary mt-5">Registration Form</h1>
                    <form className="rounded w-100 mx-auto mt-5 border p-4 bg-light shadow-lg ms-5" onSubmit={handleSubmit(handleFormSubmit)}>
                        <div className="mb-2">
                            <label htmlFor="username" className='form-label'>User Name</label>
                            <input type="text" id="username" className="form-control" {...register("username", { required: true, minLength: 4, maxLength: 8 })} />
                            {errors.username?.type === "required" && (<p className="text-danger">User Name is required</p>)}
                            {errors.username?.type === "minLength" && (<p className='text-danger'>Min Length should be 4</p>)}
                            {errors.username?.type === "maxLength" && (<p className='text-danger'>Max Length should be 8</p>)}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="birthday" className='form-label'>Date of Birth</label>
                            <input type="date" id="birthday" className="form-control" {...register("birthday", { required: true })} />
                            {errors.birthday?.type === "required" && (<p className='text-danger'>Date of Birth is Required</p>)}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="city" className='form-label'>City</label>
                            <input type="text" id="city" className="form-control" {...register("city", { required: true })} />
                            {errors.city?.type === "required" && (<p className='text-danger'>City is required</p>)}
                        </div>
                        <button type="submit" className="btn btn-success d-block mx-auto">Add User</button>
                    </form>
                </div>
                <div className="col">
                    <UserList usersList={usersList} />
                </div>
            </div>
        </div>
    )
}

export default AddUser
