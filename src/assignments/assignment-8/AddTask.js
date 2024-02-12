import React from 'react'
import { UseForm, useForm } from 'react-hook-form'
import {TasksContext} from "./contexts/TasksContext"
import { useContext } from 'react'

function AddTask() {
    let {register,handleSubmit} = useForm()
    let [tasks,setTask]=useContext(TasksContext)
    function handleTaskSubmit(taskObj){
            setTask([...tasks,taskObj])
    }

  return (
    <div>
      <p className="lead fs-1 text-center bg-dark text-info">Add Task</p>
      <form className='shadow-lg' onSubmit={handleSubmit(handleTaskSubmit)}>
         <div>
            <input type="text" id="task" className="form-control mb-4" placeholder='Enter the task' {...register("newTask")}/>
            <button type="submit" className="btn btn-success d-block mx-auto">Add</button>
         </div>
      </form>
    </div>
  )
}

export default AddTask
