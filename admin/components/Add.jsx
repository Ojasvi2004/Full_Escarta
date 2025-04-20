import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendAPI } from "../src/App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [Image1, setImage1] = useState(null);
  const [Image2, setImage2] = useState(null);
  const [Image3, setImage3] = useState(null);
  const [Image4, setImage4] = useState(null);

  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setsubCategory] = useState("Topwear");
  const [Bestseller, setBestseller] = useState(false);
  const [sizes, setsizes] = useState([]);

  const OnSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      const parsedPrice = Number(price);
      if (isNaN(parsedPrice)) {
        toast.error("Invalid price");
        return;
      }
      formData.append("price", parsedPrice);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", Bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      if (Image1) formData.append("Image1", Image1);
      if (Image2) formData.append("Image2", Image2);
      if (Image3) formData.append("Image3", Image3);
      if (Image4) formData.append("Image4", Image4);

      const res = await axios.post(`${backendAPI}/api/product/add`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Product added successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleSizeToggle = (size) => {
    setsizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100 text-slate-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-5xl font-extrabold mb-8 tracking-widest font-serif text-black">
          ESCARTA
        </h1>

        <form
          onSubmit={OnSubmitHandler}
          className="bg-white rounded-xl shadow-2xl p-8 space-y-8 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-center">Add a New Product</h2>

          <div>
            <h3 className="text-lg font-medium mb-2">Upload Product Images</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[Image1, Image2, Image3, Image4].map((img, i) => (
                <label
                  key={i}
                  className="cursor-pointer border border-slate-300 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                >
                  <img
                    src={
                      img
                        ? URL.createObjectURL(img)
                        : "../assets/691b5cc9ca70f285cba9032b074e2866_t.jpeg"
                    }
                    alt={`Image${i + 1}`}
                    className="w-full h-40 object-cover"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        [setImage1, setImage2, setImage3, setImage4][i](file);
                      }
                    }}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <label className="block mb-1 font-semibold">Product Name</label>
              <input
                type="text"
                required
                onChange={(e) => setname(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-black outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Description</label>
              <textarea
                required
                rows={3}
                onChange={(e) => setdescription(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-black outline-none transition resize-none"
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block mb-1 font-semibold">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-semibold">Sub Category</label>
                <select
                  value={subCategory}
                  onChange={(e) => setsubCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  <option value="Topwear">Topwear</option>
                  <option value="Bottomwear">Bottomwear</option>
                  <option value="Winterwear">Winterwear</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-semibold">Price</label>
                <input
                  type="number"
                  required
                  value={price}
                  onChange={(e) => setprice(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-gray-300 rounded">
            <h4 className="mb-2 font-semibold">Select Sizes</h4>
            <div className="flex gap-4 flex-wrap">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <label
                  key={size}
                  className={`px-4 py-1 border rounded cursor-pointer font-medium ${
                    sizes.includes(size)
                      ? "bg-black text-white"
                      : "bg-white text-black border-black"
                  } transition-all duration-200`}
                >
                  <input
                    type="checkbox"
                    checked={sizes.includes(size)}
                    onChange={() => handleSizeToggle(size)}
                    className="hidden"
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={Bestseller}
              onChange={() => setBestseller(!Bestseller)}
              className="accent-black w-5 h-5"
            />
            <span>Add to Bestseller</span>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-black hover:bg-slate-800 text-white px-10 py-3 text-lg font-semibold tracking-wide rounded transition-transform hover:scale-105 duration-200"
            >
              ADD PRODUCT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
