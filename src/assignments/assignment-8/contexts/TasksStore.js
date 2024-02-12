import { useState } from "react";
import { TasksContext } from "./TasksContext";

function TasksStore({children}) {
    let [tasks,setTask] = useState([])
  return (
    <div>
      <TasksContext.Provider value={[tasks,setTask]}>
        {children}
      </TasksContext.Provider>
    </div>
  )
}

export default TasksStore
