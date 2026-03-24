import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './Routes/AppRouter'
import "./Shared/Style/globalStyle.css"

const App = () => {
  return (
    <>
    <RouterProvider router={AppRouter}/>
    </>
  )
}

export default App