import React from 'react'
import AddTask from './AddTask'
import TasksList from './TasksList'
import TasksCount from './TasksCount'


function ManageTasks() {
  return (
    <div>
    <h1 className="text-center display-1 text-secondary">To-Do List</h1>
    <div className="row">
        <div className="col-sm-4 border p-4">
          <AddTask />
        </div>
        <div className="col-sm-4  border p-4">
          <TasksList/>
        </div>
        <div className="col-sm-4  border p-4">
          <TasksCount/>
        </div>
      </div>
    </div>
  )
}

export default ManageTasks
