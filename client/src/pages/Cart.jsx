import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/ShopContext";
import {toast} from 'react-toastify';

const Cart = () => {
  const {
    cartitems,
    products,
    currency,
    delivery_fee,
    DeleteFromCart,
    UpdateQuantity,
    navigate,
    Total,
    setTotal,
    cartData,
    setcartData,
  } = useContext(Shopcontext);

  const getcartData = () => {
    const tempData = [];
    for (const items in cartitems) {
      for (const item in cartitems[items]) {
        if (cartitems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartitems[items][item],
          });
        }
      }
    }
    setcartData(tempData);
  };

  const getTotalPrice = () => {
    let temp = 0;

    for (const items in cartitems) {
      const producData = products.find((product) => product._id == items);
      if (producData) {
        const productprice = producData.price;
        let tempo = 0;
        for (const item in cartitems[items]) {
          if (cartitems[items][item] > 0) {
            tempo = cartitems[items][item] + tempo;
          }
        }
        temp = temp + productprice * tempo;
      }
    }
    setTotal(temp);
  };

  const PlaceOrders=async(e)=>
  {
    e.preventDefault();

    try 
    {
      if (Total===0) 
      {
      toast.error("Cart Is Empty");
      return;
      }
      else
      {
        navigate('/placeorders');
      }
    } catch (error) {
      
    }

  }

  useEffect(() => {
    if (products.length > 0) {
      getTotalPrice();
      getcartData();
    }
  }, [cartitems, products]);

  return (
  
     <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          {/* Cart Items */}
          <div className="flex flex-col space-y-4">
            {cartData.map((item) => {
              const ProductData = products.find(
                (product) => product._id === item._id
              );

              if (!ProductData) {
                return (
                  <div
                    key={`${item._id}-${item.size}`}
                    className="text-red-500 text-sm italic bg-red-50 p-4 "
                  >
                    Product not found
                  </div>
                );
              }

              return (
                <div
                  className="bg-white border-1 border-slate-900 p-6 flex items-center gap-6 transition-all hover:shadow-md"
                  key={`${item._id}-${item.size}`}
                >
                  <div className="h-32 w-32 flex-shrink-0">
                    <img
                      src={ProductData.image?.[0] || "Placeholder.jpg"}
                      alt={ProductData.name}
                      className="h-full w-full object-contain "
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="prata text-xl md:text-2xl text-gray-900 mb-2">
                      {ProductData.name}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className="text-yellow-600 font-medium text-lg">
                        {currency}{ProductData.price}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {item.size}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        if (!isNaN(value) && value > 0) {
                          UpdateQuantity(item._id, item.size, value);
                        }
                      }}
                      className="w-16 h-10 text-center text-lg order-1 border-slate-900 font-medium  border   focus:border-transparent"
                    />
                    
                    <button
                      onClick={() => DeleteFromCart(item._id, item.size, item.quantity)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2"
                    >
                      <i className="bx bx-trash text-2xl"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Cart Summary */}
          <div className="hidden md:block">
            <div className="bg-white border-1 border-slate-900 p-8 max-w-md ml-auto">
              <h2 className="prata text-2xl text-gray-900 mb-6">Cart Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-lg font-medium">{currency}{Total}.00</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Shipping Fee</span>
                  <span className="text-lg font-medium">{currency}10.00</span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-xl font-bold text-yellow-600">
                    {currency}{Total + 10}.00
                  </span>
                </div>
              </div>
              
              <button
                onClick={PlaceOrders}
                className="w-full mt-6 bg-gray-900 text-white py-4  font-medium tracking-wide hover:bg-gray-800 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* Mobile Cart Summary */}
          <div className="md:hidden">
            <div className="bg-white border-1 border-slate-900 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Cart Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{currency}{Total}.00</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Shipping Fee</span>
                  <span className="font-medium">{currency}10.00</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold">Total</span>
                  <span className="text-lg font-bold text-yellow-600">
                    {currency}{Total + 10}.00
                  </span>
                </div>
              </div>
              
              <button
                onClick={PlaceOrders}
                className="w-full mt-6 bg-gray-900 text-white py-3  font-medium tracking-wide hover:bg-gray-800 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
