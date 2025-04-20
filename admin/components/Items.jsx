import React, { useEffect, useState } from "react";
import { backendAPI } from "../src/App";
import axios from "axios";
import { toast } from "react-toastify";
import { GiToken } from "react-icons/gi";

const Items = ({ token }) => {
  const [list, setlist] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendAPI + "/api/product/list");

      if (response.data.success) {
        setlist(response.data.allProduct);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Error: " + error.message);
      toast.error(error.message);
    }
  };

  const DeleteItem = async (itemID) => {
    try {
      const response = await axios.post(
        backendAPI + "/api/product/remove",
        { _id: itemID },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(response.data);
      await fetchList();
      toast.success("Item deleted successfully");
    } catch (error) {
      console.log("Error: " + error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl mb-8 font-semibold text-slate-900 text-center border-slate-900 pb-2">
          Product List
        </h1>

        <div className="overflow-x-auto bg-white  p-6 shadow-lg rounded-lg">
          <ul className="flex flex-wrap justify-between max-sm:hidden items-center text-xl font-semibold border-b-2 pb-3 mb-5">
            <li className="flex-1 text-center">Images</li>
            <li className="flex-2 text-center">Name</li>
            <li className="flex-1 text-center">Category</li>
            <li className="flex-1 text-center">Price</li>
            <li className="flex-1 text-center">Actions</li>
          </ul>

          {list.length > 0 ? (
            list.map((item) => (
              <div
                key={item._id}
                className="border-2 border-gray-200 rounded-lg shadow-md mb-4 p-4 flex flex-col sm:flex-row justify-between items-center hover:shadow-xl transition-all"
              >
                <div className="flex-1 text-center mb-4 sm:mb-0">
                  <img
                    className="w-24 h-32 object-cover rounded-md mx-auto"
                    src={item.image[0]}
                    alt={item.name}
                  />
                </div>

                <div className="flex-2 text-center mb-4 sm:mb-0">
                  {item.name}
                </div>
                <div className="flex-1 text-center mb-4 sm:mb-0">
                  {item.category}
                </div>
                <div className="flex-1 text-center font-semibold mb-4 sm:mb-0">
                  ₹{item.price}
                </div>

                <div className="flex-1 text-center">
                  <button
                    onClick={() => DeleteItem(item._id)}
                    className="text-red-600 hover:text-red-800 transition-all duration-300"
                  >
                    <i className="bx bx-trash text-3xl"></i>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No items available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Items;
