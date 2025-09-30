import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendAPI } from "../src/App";
import { useContext } from "react";


const OrderList = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${backendAPI}/api/order/getALLorders`);
      if (res.data.success) {
        setOrders(res.data.orders);
      }
    } catch (err) {
      console.error("Failed to fetch orders:", err.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl mb-10 font-prata text-slate-900 border-b-4 border-slate-900 inline-block pb-2 tracking-wide">
          Order List
        </h1>

        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div
              key={index}
              className="mb-10 p-6 bg-white rounded-2xl shadow-2xl border border-slate-200 hover:shadow-slate-400 transition-shadow duration-300"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-slate-800 mb-2 flex items-center">
                  <span className="inline-block bg-slate-900 text-white text-sm px-3 py-1 rounded-full mr-3">
                    #{index + 1}
                  </span>
                  {order.first_name} {order.last_name}
                </h2>
                <div className="text-sm space-y-1 text-slate-600">
                  <p>
                    <span className="font-semibold">Email:</span> {order.email}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> {order.phone}
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span>{" "}
                    {order.address}, {order.city}, {order.state}
                  </p>
                  <p className="text-xs text-slate-500 italic">
                    Placed on {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {order.OrderItems && order.OrderItems.length > 0 ? (
                  order.OrderItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-white to-slate-50 p-4 rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-full mb-3 overflow-hidden flex items-center justify-center rounded bg-white border border-slate-100">
                        <img
                          src={
                            Array.isArray(item.image)
                              ? item.image[0]
                              : item.image
                          }
                          alt={item.name}
                          className=" w-full object-contain rounded mb-2"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800 truncate">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-600">
                        Size: <span className="font-medium">{item.size}</span>
                      </p>
                      <p className="text-sm text-slate-600">
                        Quantity:{" "}
                        <span className="font-medium">{item.quantity}</span>
                      </p>
                      <p className="text-sm text-slate-700 font-semibold mt-1">
                        ${item.price}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-500">No items in this order.</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-slate-700 font-medium">
            No orders found.
          </p>
        )}
      </div>
    </div>
  );
};

export default OrderList;
