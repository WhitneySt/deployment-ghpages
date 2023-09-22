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
        <Route element={<Layout />}>
          <Route element={<PublicRouter isAuthenticate={true} />}>
            <Route path='/deployment-ghpages/login' element={<Login />} />
            <Route path='/deployment-ghpages/register' element={ <Register/>} />
          </Route>
          <Route element={<PrivateRouter isAuthenticate={true} />}>
            <Route path='/deployment-ghpages' element={ <Home/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;