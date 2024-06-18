import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import AuthPage from '../Pages/AuthPage/AuthPage'



const Routing = () => {
    const router = createBrowserRouter([
        {
            path : "/",
            element : <AuthPage/>,
            children : [
                {
                    
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

export default Routing
