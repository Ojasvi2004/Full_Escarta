import React, { useContext, useEffect, useState } from "react";
import { Shopcontext, backendAPI } from "../context/ShopContext";
import { CreditCard, Truck, Lock } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const Placeorder = () => {
  const {
    currency,
    Total,
    cartData,
    setcartitems,
    setcartData,
    navigate,
    token,
  } = useContext(Shopcontext);

  const [first, setfirst] = useState("");
  const [last, setlast] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");

  const OnSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const OrderProducts = cartData;
      // const formData=new FormData();
      // formData.append("first_name",first);
      // formData.append("last_name",last);
      // formData.append("email",email);
      // formData.append("phone",phone);
      // formData.append("address",address);
      // formData.append("city",city);
      // formData.append("state",state);
      const orderData = {
        first_name: first,
        last_name: last,
        email,
        phone,
        address,
        city,
        state,
        OrderProducts,
      };

      const response = await axios.post(
        backendAPI + "/api/order/placemyorder",
        orderData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setcartData([]);
      setcartitems({});
      toast.success("Order placed");
      console.log(response.message);
    } catch (error) {
      console.log("Error:" + error.message);
      toast.error(error.message);
    }
  };
  // useEffect(()=>{
  //   console.log(cartData);
  // })

  return (
    <form
      onSubmit={OnSubmitHandler}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl prata  text-gray-900 mb-8">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="bg-white  border-1 border-slate-800 p-6 mb-6">
              <h2 className="text-xl prata text-gray-800 mb-6">
                Shipping Information
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      onChange={(e) => setfirst(e.target.value)}
                      type="text"
                      className="peer w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-blue-600 focus:outline-none"
                      placeholder="First name"
                      required
                    />
                    <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-0 peer-focus:text-sm peer-focus:text-blue-600">
                      First name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      onChange={(e) => setlast(e.target.value)}
                      type="text"
                      className="peer w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-blue-600 focus:outline-none"
                      placeholder="Last name"
                      required
                    />
                    <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-0 peer-focus:text-sm peer-focus:text-blue-600">
                      Last name
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    onChange={(e) => setemail(e.target.value)}
                    type="email"
                    className="peer w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    required
                  />
                  <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-0 peer-focus:text-sm peer-focus:text-blue-600">
                    Email address
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={(e) => setphone(e.target.value)}
                    type="tel"
                    className="peer w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-blue-600 focus:outline-none"
                    placeholder="Phone number"
                    required
                  />
                  <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-0 peer-focus:text-sm peer-focus:text-blue-600">
                    Phone number
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={(e) => setaddress(e.target.value)}
                    type="text"
                    className="peer w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-blue-600 focus:outline-none"
                    placeholder="Address"
                    required
                  />
                  <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-0 peer-focus:text-sm peer-focus:text-blue-600">
                    Street address
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      onChange={(e) => setcity(e.target.value)}
                      type="text"
                      className="peer w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-blue-600 focus:outline-none"
                      placeholder="City"
                      required
                    />
                    <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-0 peer-focus:text-sm peer-focus:text-blue-600">
                      City
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      onChange={(e) => setstate(e.target.value)}
                      type="text"
                      className="peer w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-blue-600 focus:outline-none"
                      placeholder="State"
                      required
                    />
                    <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-0 peer-focus:text-sm peer-focus:text-blue-600">
                      State
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white   border-1 border-slate-800 p-6">
              <div className="flex items-center gap-4 mb-6">
                <Lock className="w-5 h-5 text-green-600" />
                <p className="text-sm text-gray-600">
                  Your payment information is secure and encrypted
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white   border-1 border-slate-800 p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">
                    {currency}
                    {Total}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">{currency}10.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">
                    {currency}
                    {(Total * 0.1).toFixed(2)}
                  </span>
                </div>
                <div className="h-px bg-gray-200"></div>
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold">
                    {currency}
                    {(Total + 10 + Total * 0.1).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 ">
                  <Truck className="w-5 h-5 text-slate-800" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Free shipping
                    </p>
                    <p className="text-sm text-gray-600">
                      Delivery within 3-5 business days
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-800 text-white py-3 px-4  hover:bg-slate-900 transition-colors flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-5 h-5" />
                  Place Order
                </button>

                <p className="text-xs text-center text-gray-500">
                  *Only Cash On Delivery is available in this demo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
