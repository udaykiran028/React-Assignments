import React from 'react'

function Child(props) {
  return (
    <div className="card mx-auto p-3">
      <div className="card-body">
         <h5 className="text-center">Child Component</h5>
        <button className="btn btn-primary me-3" onClick={props.fun1}>Increment</button>
        <button className="btn btn-danger" onClick={props.fun2}>Decrement</button>
      </div>
    </div>
  )
}

export default Child
