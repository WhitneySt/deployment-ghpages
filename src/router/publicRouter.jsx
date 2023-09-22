import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRouter = ({ isAuthenticate, redirectPath = '/deployment-ghpages',
  children }) => {
  if (isAuthenticate) return <Navigate to={redirectPath} replace />
  return (
    <div>{children ? children : <Outlet />}</div>
  )
}

export default PublicRouter