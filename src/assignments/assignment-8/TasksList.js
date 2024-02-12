import React from 'react'
import { TasksContext } from './contexts/TasksContext'
import { useContext } from 'react'
function TasksList() {
  let [tasks]=useContext(TasksContext)
  return (
    <div>
       <p className="lead fs-1 text-center bg-dark text-info">Tasks List</p>
       {
         tasks.map((task,index)=>(<p className='lead' key={index}>{task.newTask}</p>))
       }
    </div>
  )
}

export default TasksList
