import React from 'react'

function UserCount(props) {
  return (
      <div className="card mx-auto p-3">
          <div className="card-body">
              <h1 className="text-primary text-center">Counter: {props.data} </h1>
          </div>
      </div>
  )
}

export default UserCount
