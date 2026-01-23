import React from 'react'
import { Outlet } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

const SecurityLayout = () => {
  return (
    <div>
      <Outlet/>
      <ToastContainer/>
    </div>
  )
}

export default SecurityLayout