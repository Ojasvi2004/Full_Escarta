import React, { useContext, useEffect, useState } from 'react'
import { backendAPI, Shopcontext } from '../context/ShopContext'
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {

  const {navigate}=useContext(Shopcontext);
  const {token,settoken }=useContext(Shopcontext);

  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");

  const onSubmitHandler=async(e)=>{

    e.preventDefault();

    try {

        const response= await axios.post(backendAPI+"/api/user/login",{
            email:email,
            password:password
        })

        console.log(response.data);
        if (response.data.success) {

            const AT=response.data.accessToken;
          
            settoken(AT);
            localStorage.setItem("token",AT);
            navigate('/');
            
        }
        else{
            toast.error(response.data.message);
        }
        
    } catch (error) {
        toast.error(error.message);
    }

  }
//   useEffect(()=>{
//     console.log('====================================');
//     console.log(token);
//     console.log('====================================');
//   },[])

  return (
    <div className='p-14 max-sm:p-6 max-sm:pt-10 max-sm:pb-10'>

<div className="w-full max-w-sm p-6 m-auto mx-auto bg-white border-1 border-slate-800 ">
    <div className="flex justify-center mx-auto">
         <p className=' prata text-2xl tracking-widest text-slate-800'>ESCARTA</p>
    </div>

    <form onSubmit={onSubmitHandler} className="mt-6">
        <div>
            <label htmlFor="email" className="block roboto text-gray-800  ">Email</label>
            <input onChange={(e)=>setemail(e.target.value)} type="email" className="block w-full px-2 py-1  outline-0 mt-2 border-b-2 border-slate-800 " />
        </div>

        <div className="mt-4">
            <div className="flex items-center justify-between">
                <label htmlFor="password" className="block roboto text-gray-800   ">Password</label>
                {/* <a href="#" className="text-xs text-gray-600  hover:underline">Forget Password?</a> */}
            </div>

            <input onChange={(e)=>setpassword(e.target.value)} type="password" className="block w-full px-2 py-1  outline-0 mt-2 border-b-2 border-slate-800" />
        </div>

        <div className="mt-14">
            <button type="submit" className="w-full hover:cursor-pointer px-6 py-2.5 text-md font-medium tracking-widest text-white capitalize transition-colors duration-300 transform bg-gray-800  hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
            </button>
        </div>
    </form>

{/* 

    <div className="flex items-center mt-6 -mx-2">
        <button type="button" className=" hover:cursor-pointer flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-slate-800 hover:bg-slate-900">
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                </path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>

        <a href="#" className="p-2 mx-2 text-sm font-medium text-slate-800 transition-colors duration-300 transform   hover:cursor-pointer">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z">
                </path>
            </svg>
        </a>
    </div> */}

    <p className="mt-8 text-xs font-light text-center text-gray-800"> Don't have an account? <a href="#" onClick={()=>navigate('/signup')} className="font-medium text-gray-700  hover:underline">Create One</a></p>
</div>
      
    </div>
  )
}

export default Login
