import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/layout';
import PublicRouter from './publicRouter';
import PrivateRouter from './privateRouter';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import Home from '../pages/home/home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<PublicRouter isAuthenticate={true} />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={ <Register/>} />
          </Route>
          <Route element={<PrivateRouter isAuthenticate={true} />}>
            <Route index element={ <Home/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;