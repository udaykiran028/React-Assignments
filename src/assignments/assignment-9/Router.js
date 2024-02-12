import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './home/Home'
import Register from './register/Register'
import Login from './login/Login'
import Technologies from './technologies/Technologies'
import ErrorRoute from './ErrorRoute'
import Java from './java/Java'
import NodeJs  from './nodejs.js/NodeJs'
import Vue from './vue/Vue'
import UserDashBoard from './user-dashboard/UserDashboard'

function Router() {
  let router = createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      errorElement:<ErrorRoute/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:"register",
          element:<Register/>          
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"user-dashboard/:username",
          element:<UserDashBoard/>
        },
        {
          path:"technologies",
          element:<Technologies/>,
          children:[
            {
              path:"java",
              element:<Java/>
            },
            {
              path:"nodejs",
              element:<NodeJs/>
            },
            {
              path:"Vue",
              element:<Vue/>
            }
          ]
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Router
