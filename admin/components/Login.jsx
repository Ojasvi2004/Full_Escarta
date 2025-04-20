import React, { useState } from "react";
import axios from "axios";
import { backendAPI } from "../src/App";
import { toast } from "react-toastify";

const Login = ({ settoken }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(backendAPI + "/api/user/admin", {
        email,
        password,
      });

      if (response.data.success) {
        settoken(response.data.Accesstoken);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className=" flex justify-center items-center w-full  min-h-screen">
      <div className="w-1/4 max-sm:w-6/7  overflow-hidden bg-white  shadow-lg ">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <span className="  text-4xl tracking-wider px-5 font-semibold   max-sm:px-0 max-sm:pr-2  roboto">
              ESCARTA
            </span>
          </div>

          <p className="mt-1 text-center text-gray-600 roboto font-semibold ">
            ADMIN PANEL
          </p>

          <form onSubmit={onSubmitHandler}>
            <div className="w-full mt-4">
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => setemail(e.target.value)}
                className="block w-full px-4 py-2 mt-2  border-1 border-black"
                type="email"
                placeholder="your@email.com"
                aria-label="Email Address"
              />
            </div>

            <div className="w-full mt-4">
              <label htmlFor="">Password</label>
              <input
                onChange={(e) => setpassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2  border-1 border-black"
                type="password"
                placeholder="Enter your password"
                aria-label="Password"
              />
            </div>

            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="px-3 py-2 text-md  bg-slate-800  text-white tracking-widest "
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
