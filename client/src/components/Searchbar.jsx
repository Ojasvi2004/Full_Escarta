import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {

    const{search,setsearch,showsearch,setshowsearch}=useContext(Shopcontext);
    
    const[visible,setvisible]=useState(false);

    const location=useLocation();

    useEffect(()=>{
     
      if (location.pathname.includes('/collection') && showsearch) 
      {
        setvisible(true);
      }
      else{
        setvisible(false);
      }
      
    },[showsearch,setshowsearch])
  
 

   
  return (
    <div className=' flex justify-center items-center'>
      <div className={`   items-center justify-center flex transition-all duration-300 overflow-hidden ${(showsearch && visible)? 'h-20':'h-0'} ${showsearch? 'w-full':'w-0'}   ${showsearch? ' opacity-100':' opacity-0'}`}>

<input value={search} onChange={(e)=>{setsearch(e.target.value)}} className=' h-1/2 w-1/2 max-sm:w-3/4 bg-white  pl-4 border-1 border-slate-900 ' type='text' placeholder='Search'></input>
<label htmlFor="" className='pl-8 text-4xl  font-extralight max-sm:pl-4 ' ><button onClick={()=>{setshowsearch(false)}} className='hover:cursor-pointer'><i className='bx bx-x'></i></button></label>



</div>
    </div>
  )
}

export default Searchbar
