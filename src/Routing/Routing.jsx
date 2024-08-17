import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import HomePageLayOut from '../Pages/HomePageLayOut'
import CourtList from '../Components/Courts/CourtList'
import HomePage from '../Pages/HomePage'



const Routing = () => {
    const router = createBrowserRouter([
        {
            path : "/",
            element : <HomePageLayOut/>
        },
        {
          path : "/home",
          element : <HomePage/>
        }
    ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Routing
