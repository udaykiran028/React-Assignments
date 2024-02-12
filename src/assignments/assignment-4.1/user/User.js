import React from 'react'

function User(props) {
  return (
    <div className="card p-4 shadow-lg bg-light text-center">
    <img src={props.userData.avatar}   alt="" className="w-50 d-block mx-auto"/>
    <div className="card-body">
      <p className="lead text-primary">
        {props.userData.first_name} {props.userData.last_name}
      </p>
      <p className="lead text-secondary">{props.userData.email}</p>
    </div>
  </div>
  )
}

export default User
