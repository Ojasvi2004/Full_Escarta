import React, { useContext, useEffect, useState } from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../context/ShopContext'


const Navbar = () => {

  const [visible,setvisible]=useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { search,setsearch,showsearch,setshowsearch, cartitems,TotalItems,navigate,token,settoken,setcartData,setcartitems }=useContext(Shopcontext);



  const Logout=async (e) => {

    localStorage.removeItem('token');
    settoken('');
    setcartitems({});
    navigate('/login');
    
    
  }

  const closeDropdown = () => setShowDropdown(false);

  const handleToggleDropdown = () => {
   
    if (token) setShowDropdown((prev) => !prev);
    else navigate("/login");
  };


 






  return (
    <div className=' flex  items-center  justify-between  py-5 px-5 max-sm:px-2  font-medium'>

        <span className='  text-4xl tracking-wider px-5   max-sm:px-0 max-sm:pr-2 max-sm:text-2xl roboto'>ESCARTA</span>

        <ul className=' hidden sm:flex gap-5  text-sm text-gray-700'>

          <NavLink to={'/'}  className={` ${({isactive})=>{isactive? 'active':''}}   flex flex-col items-center  gap-1 px-2 `}>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
          </NavLink>
          <NavLink to={'/collection'}  className={` ${({isactive})=>{isactive? 'active':''}}   flex flex-col items-center  gap-1 px-2 `}>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
          </NavLink>
          <NavLink to={'/about'}  className={` ${({isactive})=>{isactive? 'active':''}}   flex flex-col items-center  gap-1 px-2 `}>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
          </NavLink>
          <NavLink to={'/contact'}  className={` ${({isactive})=>{isactive? 'active':''}}   flex flex-col items-center  gap-1 px-2 `}>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
          </NavLink>

        </ul>


        <div className='flex items-center gap-6'>

          <span onClick={()=>{setshowsearch(prev=> !prev);navigate('/collection')}}><i className='bx bx-search text-3xl cursor-pointer'></i></span>

          <div className="relative group">
               <i  onClick={handleToggleDropdown} className="bx bx-user text-3xl cursor-pointer"></i>
               {
                token &&
                <div  className={`
                  ${showDropdown ? "block" : "hidden"} 
                  group-hover:block 
                  absolute right-0 pt-2 w-32 bg-slate-50 text-gray-600
                `} >
                {/* <p className="cursor-pointer px-4 py-2 hover:bg-gray-100 hover:text-black">My Profile</p>
                <p onClick={()=>navigate('/orders')}  className="cursor-pointer px-4 py-2 hover:bg-gray-100 hover:text-black">Orders</p> */}
                <p onClick={Logout} className="cursor-pointer px-4 py-2 hover:bg-gray-100 hover:text-black">Log Out</p>
           </div>
               }
          </div>

          <Link to='/cart' className=' relative' >
          <i className='bx bx-shopping-bag text-3xl'></i>
          <p className=' absolute right-[-5px] bg-black text-center text-white text-xs rounded-full w-4 h-4 bottom-[-5px]'>{TotalItems}</p>
          </Link>

          <div className='md:hidden lg:hidden '>
         
          <button><i className='bx bx-menu text-3xl ' onClick={()=>{setvisible(prev=>!prev)}}  ></i></button>
          </div>


          <div className={`  absolute top-0  right-0  bottom-0  overflow-hidden  bg-white  transition-all ${visible? 'w-2/3':'w-0'}`}>
              <div className='bg-gray-200 mb-10'> 
                <div className='  flex flex-col  text-gray-600'>
                  <div className=' flex  items-center gap-4 p-3' onClick={()=>{setvisible(false)}}>
                  <i className='bx bx-x text-3xl'></i>
                  </div>
                </div>
              </div>


              <NavLink to={'/'} className={' py-3 px-6 border-b-1 text-xl  border-t-1 block   border-gray-400'} onClick={()=>{setvisible(false)}}>Home</NavLink>
              <NavLink to={'/collection'} className={' py-3 px-6 border-b-1 text-xl   block  border-gray-400'} onClick={()=>{setvisible(false)}}>Collection</NavLink>
              <NavLink to={'/about'} className={' py-3 px-6 border-b-1 text-xl  block  border-gray-400'} onClick={()=>{setvisible(false)}}>About</NavLink>
              <NavLink to={'/contact'} className={' py-3 px-6 border-b-1 text-xl   block  border-gray-400'} onClick={()=>{setvisible(false)}}>Contact</NavLink>
              
          </div>
    



        </div>


      
    </div>
  )
}

export default Navbar
