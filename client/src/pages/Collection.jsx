import React, { useContext, useEffect, useState } from "react";
import "../index.css";
import { Shopcontext } from "../context/ShopContext";
import Productitem, { Productitem3 } from "../components/Productitem";

const Collection = () => {
  const { products, search, setsearch, showsearch, setshowsearch } =
    useContext(Shopcontext);

  const [showfilter, setshowfilter] = useState(false);
  const [filterproducts, setfilterproducts] = useState([]);

  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);

  const [sortType, setsortType] = useState("relavent");

  const sorting = () => {
    const sortcopy = filterproducts.slice();

    switch (sortType) {
      case "relavent":
        setfilterproducts(products);
        break;
      case "low-high":
        setfilterproducts(sortcopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setfilterproducts(sortcopy.sort((a, b) => a.price - b.price).reverse());
        break;

      default:
        setfilterproducts(products);
        break;
    }
  };

  useEffect(() => {
    sorting();
  }, [sortType, setsortType]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setcategory((prev) => [...prev, e.target.value]);
    }
  };

  const togglesubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setsubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setsubcategory((prev) => [...prev, e.target.value]);
    }
  };

  useEffect(() => {
    ApplyFilter();
  }, [subcategory, category, search, showsearch, products]);

  useEffect(() => {
    setfilterproducts(products);
  }, [products]);

  const ApplyFilter = () => {
    let productCopy = products.slice();

    if (showsearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subcategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subcategory.includes(item.subCategory)
      );
    }

    setfilterproducts(productCopy);
  };

  return (
    <div className=" w-full h-full flex  max-sm:flex-col ">
      <div className="  w-1/3  max-sm:w-full flex-col flex  items-start p-10 max-sm:p-5">
        <p className=" text-2xl max-sm:text-xl prata">
          FILTERS{" "}
          <button
            className=" text-xl "
            onClick={() => {
              setshowfilter((prev) => !prev);
            }}
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </p>
        <div
          className={` w-full h-fit border-1 border-slate-900 mt-5 p-5  ${
            showfilter ? "" : "max-sm:hidden"
          }`}
        >
          <p className=" ">CATEGORIES</p>
          <div className="m-3">
            <input
              type="checkbox"
              name="Men"
              value={"Men"}
              onChange={toggleCategory}
            />
            <label htmlFor="Men" className="ml-3">
              Men
            </label>
          </div>
          <div className="m-3">
            <input
              type="checkbox"
              name="Women"
              value={"Women"}
              onChange={toggleCategory}
            />
            <label htmlFor="Women" className="ml-3">
              Women
            </label>
          </div>
          <div className="m-3">
            <input
              type="checkbox"
              name="Kids"
              value={"Kids"}
              onChange={toggleCategory}
            />
            <label htmlFor="Kids" className="ml-3">
              Kids
            </label>
          </div>
        </div>
        <div
          className={` w-full h-fit border-1 border-slate-900 mt-5 p-5  ${
            showfilter ? "" : "max-sm:hidden"
          }`}
        >
          <p className=" ">TYPES</p>
          <div className="m-3">
            <input
              id="Topwear"
              type="checkbox"
              name="Topwear"
              value={"Topwear"}
              onChange={togglesubcategory}
            />
            <label htmlFor="Topwear" className="ml-3">
              Topwear
            </label>
          </div>
          <div className="m-3">
            <input
              type="checkbox"
              id="Bottomwear"
              name="Bottomwear"
              value={"Bottomwear"}
              onChange={togglesubcategory}
            />
            <label htmlFor="Bottomwear" className="ml-3">
              Bottomwear
            </label>
          </div>
          <div className="m-3">
            <input
              type="checkbox"
              id="Winterwear"
              name="Winterwear"
              value={"Winterwear"}
              onChange={togglesubcategory}
            />
            <label htmlFor="Winterwear" className="ml-3">
              Winterwear
            </label>
          </div>
        </div>
      </div>

      <div className=" w-full   max-sm:w-full flex-col flex  items-start p-10 max-sm:p-5">
        <div className=" flex justify-between max-sm:flex-col w-full">
          <span className=" text-4xl max-sm:text-3xl prata text-slate-800">
            ALL-COLLECTIONS
          </span>

          <select
            name=""
            id=""
            className="border-1 border-slate-900 px-2 h-10 max-sm:mt-5"
            value={sortType}
            onChange={(e) => setsortType(e.target.value)}
          >
            <option value="relavent">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-sm:gap-0 gap-y-6 mt-5">
          {filterproducts.map((item, index) => {
            return (
              <Productitem3
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
