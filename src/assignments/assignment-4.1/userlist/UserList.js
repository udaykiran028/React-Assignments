import React from 'react'
import User from '../user/User'

function UserList() {
    let users = 
    [
      {
        id: 1,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 2,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 3,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
      {
        id: 4,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
      },
      {
        id: 5,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg",
      },
      {
        id: 6,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
      },
    ];
  return (
    <div >
        <div className="d-flex justify-content-around" style={{marginTop:'75px'}}>
            <User userData={users[0]}/>
            <User userData={users[1]}/>
            <User userData={users[2]}/>                
        </div>
        <div className="d-flex justify-content-around" style={{marginTop:'75px'}}>
            <User userData={users[3]}/>
            <User userData={users[4]}/>
            <User userData={users[5]}/>                
        </div>
    </div>
  )
}

export default UserList
