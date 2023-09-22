import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = ({ isAuthenticate, redirectPath = '/login',
  children }) => {
  if (!isAuthenticate) return <Navigate to={redirectPath} replace />
  return (
    <div>{children ? children : <Outlet />}</div>
  )
}

export default PrivateRouter