import React from 'react'

function UserList({usersList}) {
    console.log(usersList)
  return (
    <div>
       <h1 className="text-center text-info mt-5">List of Registered Users</h1>
       <div className='col-sm-8 mx-auto'>
      <table className="table table-striped table-bordered text-center ">
            <thead>
            <tr className='table-success'>
                <th>UserName</th>
                <th>Date of Birth</th>
                <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    usersList.map((user,index)=><tr key={index}>
                        <td>{user.username}</td>
                        <td>{user.birthday}</td>
                        <td>{user.city}</td>
                    </tr>)
                }
            </tbody>
      </table>
      </div>
    </div>
  )
}

export default UserList
