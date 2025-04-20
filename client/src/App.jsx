import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Placeorder from './pages/Placeorder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Signup from './pages/Signup'


const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Searchbar/>

      <Routes>


        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:productID' element={<Product/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/placeorders' element={<Placeorder/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/signup' element={<Signup/>}/>


      </Routes>
      <Footer/>
 
      
    </div>
  )
}

export default App

