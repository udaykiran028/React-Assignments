import React from 'react'

function Navbar() {
  return (
    <ul className="nav justify-content-end bg-dark text-white p-3 fs-5">
    <li className="nav-item">
      <a className="nav-link" href=" ">
        Home
      </a>
    </li>
     <li className="nav-item">
      <a className="nav-link" href="register">
        Register
      </a>
    </li>
     <li className="nav-item">
      <a className="nav-link" href="login">
        Login
      </a>
    </li>
 
  </ul>
  )
}

export default Navbar
