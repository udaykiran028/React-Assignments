import React from 'react'
import {useEffect,useState} from 'react'
import UserCount from '../usercount/UserCount'


function Users() {
    let [users,setUsers] = useState([])
    let [userCount,setUserCount]=useState(0)
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(usersList=>setUsers(usersList))
   },[])

    function addUser()
    {
        setUserCount(userCount+1)
    }
  return (
    <div>
      <UserCount data={userCount}/>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 text-center">
      {
        users.slice(0,4).map(userObj=>
            <div className="card p-4 shadow-lg" key={userObj.id}>
                <div className='card-body'>
                    <p className="lead text-center text-success">{userObj.name}</p>
                    <p className="lead text-center text-info">{userObj.email}</p>
                    <p className="lead text-center text-warning">{userObj.phone}</p>
                    <p className="lead text-center text-secondary">{userObj.website}</p>
                    <button className='btn btn-danger ' onClick={addUser}>Add User</button>
                </div>
            </div>
        )
      }
    </div>
    </div>
  )
}

export default Users
