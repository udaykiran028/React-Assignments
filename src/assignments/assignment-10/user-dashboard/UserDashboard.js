import React from 'react'
import {useLocation} from "react-router-dom"

function UserDashboard() {
  let {state} = useLocation();
  return (
    <div>
      <div className="text-end">
        <p className="lead fs-3 text-info">
          Welcome, <span className='text-danger fs-1'>{state.username}</span>
        </p>
      </div>
    </div>
  )
}

export default UserDashboard
