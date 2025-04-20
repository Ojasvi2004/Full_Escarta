import React, { useContext, useState } from "react";
import { backendAPI, Shopcontext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { token, settoken } = useContext(Shopcontext);
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");


  const navigate=useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      toast.error("Password and Confirm Password not matched.");
      return;
    }
    try {
      const response = await axios.post(backendAPI + "/api/user/register", {
        username: username,
        email: email,
        password: password,
      });

      if (response.data.success) {
        console.log(response.data);
        settoken(response.data.Access_Token);
        localStorage.setItem("token", response.data.Access_Token);
        navigate('/login');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="p-14 max-sm:p-6 max-sm:pt-10 max-sm:pb-10">
        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white border-1 border-slate-800 ">
          <div className="flex justify-center mx-auto">
            <p className=" prata text-3xl font-bold tracking-widest text-slate-800">
              Sign Up-
            </p>
          </div>

          <form onSubmit={onSubmitHandler} className="mt-6">
            <div>
              <label
                htmlFor="username"
                className="  block roboto text-gray-800  "
              >
                Username
              </label>
              <input
                onChange={(e) => setusername(e.target.value)}
                type="text"
                className="block w-full px-2 py-1  outline-0  border-b-2 border-slate-800 "
              />
            </div>
            <div className=" mt-4">
              <label htmlFor="email" className=" block roboto text-gray-800  ">
                Email
              </label>
              <input
                onChange={(e) => setemail(e.target.value)}
                type="email"
                className="block w-full px-2 py-1  outline-0  border-b-2 border-slate-800 "
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block roboto text-gray-800   "
                >
                  Password
                </label>
              </div>
              <input
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                className="block w-full px-2 py-1  outline-0  border-b-2 border-slate-800"
              />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block roboto text-gray-800   "
                >
                  Confirm Password
                </label>
              </div>
              <input
                onChange={(e) => setconfirmpassword(e.target.value)}
                type="password"
                className="block w-full px-2 py-1  outline-0  border-b-2 border-slate-800"
              />
            </div>

            <div className="mt-14">
         
              <button
                type="submit" 
                className="w-full hover:cursor-pointer px-6 py-2.5 text-md font-medium tracking-widest text-white capitalize transition-colors duration-300 transform bg-gray-800  hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>
          
            </div>
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default Signup;
