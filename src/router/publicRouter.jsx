import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRouter = ({ isAuthenticate, redirectPath = '/',
  children }) => {
  if (isAuthenticate) return <Navigate to={'/'} replace />
  return (
    <div>{children ? children : <Outlet />}</div>
  )
}

export default PublicRouter