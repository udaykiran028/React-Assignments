import React from 'react'
import {Link,Outlet} from 'react-router-dom'

function Technologies() {
  return (
    <div>
      
      <ul className="nav justify-content-center mt-5">
        {/* link to Home  */}
        <li className="nav-item">
          <Link className="nav-link" to="java">
            Java
          </Link>
        </li>
        {/* link to Register  */}
        <li className="nav-item">
          <Link className="nav-link" to="nodejs">
            NodeJS
          </Link>
        </li>
        {/* link to Login  */}
        <li className="nav-item">
          <Link className="nav-link" to="vue">
            Vue
          </Link>
        </li>
      </ul>

      {/* component place holder */}
      <Outlet />
    </div>
  )
}

export default Technologies
