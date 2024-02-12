import React from 'react'
import { TasksContext } from './contexts/TasksContext'
import { useContext } from 'react'

function TasksCount() {
    let [tasks] = useContext(TasksContext)
  return (
    <div>
      <p className="lead fs-1 text-center bg-dark text-info">Tasks Count</p>
      {
        <h5>No of tasks <span className="text-success">{tasks.length}</span></h5>
      }
    </div>
  )
}

export default TasksCount
