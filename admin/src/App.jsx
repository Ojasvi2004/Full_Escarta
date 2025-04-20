import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import { Route, Routes } from 'react-router-dom'
import Add from '../components/Add'
import Orderlist from '../components/Orderlist'

import Login from '../components/Login'
import { ToastContainer } from 'react-toastify'
import Items from '../components/Items'

export const backendAPI = import.meta.env.VITE_BACKEND_URL;



const App = () => {

  const [token, settoken] = useState(localStorage.getItem('AccessToken') ? localStorage.getItem('AccessToken') : '');

  useEffect(() => {
    localStorage.setItem('token', token);
    console.log("in app ---" + token);

  }, [token])

  return (
    <div>
      <ToastContainer />
      {token == "" ?
        <Login settoken={settoken} /> :
        <>
          <Navbar settoken={settoken} />
          <Routes>
            <Route path='/' element={<Orderlist />} token={token} />
            <Route path='/add' element={<Add token={token} />} />
            <Route path='/orderlist' element={<Orderlist />} token={token} />
            <Route path='/itemlist' element={<Items token={token} />}  />
          </Routes>
        </>}

    </div>
  )
}

export default App
