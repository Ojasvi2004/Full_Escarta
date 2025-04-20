import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/ShopContext";
import { useSearchParams, useParams } from "react-router-dom";
import { useSwiper, useSwiperSlide, SwiperSlide, Swiper } from "swiper/react";
import "../index.css";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const swiper = useSwiper();

  const { productID } = useParams();

  const [thisproduct, setthisproduct] = useState({});
  const { products, currency } = useContext(Shopcontext);
  const { addToCart } = useContext(Shopcontext);

  const fetchProductData = () => {
    const product = products.find((item) => {
      return item._id === productID;
    });
    setthisproduct(product || null);
  };
  useEffect(() => {
    fetchProductData();
  }, [productID, products]);

  const handleMediaClick = (media, event) => {
    event.preventDefault();
  };

  const [main, setmain] = useState("https://placehold.co/600x400");

  useEffect(() => {
    if (
      thisproduct &&
      Array.isArray(thisproduct.image) &&
      thisproduct.image.length > 0
    ) {
      setmain(thisproduct.image[0]);
    }
  }, [thisproduct, setmain]);

  const [activesize, setactivesize] = useState("");

  if (!thisproduct) {
    return <p>Loading product or product not found...</p>;
  }
  return (
    <>
      <div className="sm:mt-10 mb-20 h-full flex max-sm:flex-col ">
        <div className=" flex h-full  max-sm:flex-col sm:w-1/2 ">
          <div className=" flex max-sm:flex-col  w-full   ">
            <div
              className=" flex  flex-col  gap-3 max-sm:hidden pl-14 pr-14  justify-center     "
              key={7}
            >
              {thisproduct.image &&
                thisproduct.image.length > 0 &&
                thisproduct.image.map((media, index) => {
                  const isVideo =
                    media.endsWith(".mp4") ||
                    media.endsWith(".webm") ||
                    media.endsWith(".ogg");

                  return (
                    <div
                      className=" hover:cursor-pointer"
                      onClick={() => setmain(media)}
                      key={index}
                    >
                      {isVideo ? (
                        <video
                          autoPlay
                          loop
                          key={index}
                          className="  w-24   object-cover"
                        >
                          <source src={media} />
                        </video>
                      ) : (
                        <img src={media} key={index} className=" w-24 h-26" />
                      )}
                    </div>
                  );
                })}
            </div>

            <div className=" w-full h-full s  p-5 flex justify-center">
              {(main && main.endsWith(".mp4")) ||
              main.endsWith(".webm") ||
              main.endsWith("ogg") ? (
                <video
                  loop
                  autoPlay
                  className="w-96 h-full object-cover"
                  pointer-events-none="true"
                >
                  <source src={main} />
                </video>
              ) : (
                <img src={main} alt="" className="w-96 h-full object-cover" />
              )}
            </div>

            <div className=" flex  sm:hidden flex-wrap gap-2  ">
              <Swiper
                loop="true"
                spaceBetween={10}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
              >
                {thisproduct.image &&
                  thisproduct.image.length > 0 &&
                  thisproduct.image.map((media, index) => {
                    const isVideo =
                      media.endsWith(".mp4") ||
                      media.endsWith(".webm") ||
                      media.endsWith(".ogg");
                    return (
                      <SwiperSlide
                        key={index}
                        className=" hover:cursor-pointer"
                        onClick={() => {
                          setmain(media);
                        }}
                      >
                        {isVideo ? (
                          <video
                            autoPlay
                            loop
                            className="w-full h-auto object-cover"
                            onClick={handleMediaClick}
                            pointer-events-none="true"
                          >
                            <source src={media} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img
                            src={media}
                            className="w-full h-auto object-cover"
                            alt={`Product media ${index + 1}`}
                          />
                        )}
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </div>

        <div className=" sm:w-1/2 md:1/2 lg:1/2 h-full  mt-5">
          <div className=" text-3xl max-sm:text-2xl prata  p-2">
            {thisproduct.name}
          </div>
          <div>
            <div className="flex items-center p-2">
              <svg
                className="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>
          <div className=" text-3xl p-2">
            {currency} {thisproduct.price}
          </div>
          <div className=" text p-2">{thisproduct.description}</div>
          <div className=" p-2">
            <span className=" roboto text-xl">Available Size</span>
            <div className="flex gap-2 pt-5">
              {thisproduct && thisproduct.sizes ? (
                thisproduct.sizes.split(",").map((size, index) => (
                  <div
                    key={index}
                    className={`bg-slate-900 text-white w-10 h-10 text-2xl text-center pt-1 cursor-pointer ${
                      activesize === size ? "border-2 border-amber-400" : ""
                    }`}
                    onClick={() => setactivesize(size)}
                  >
                    {size}
                  </div>
                ))
              ) : (
                <p>Not Available</p>
              )}
            </div>
          </div>
          <div className="p-2 mt-5">
            <button
              className=" bg-slate-900 text-white p-2 pr-3 pl-3 hover:cursor-pointer"
              onClick={() => addToCart(thisproduct._id, activesize)}
            >
              Add To Cart
            </button>
          </div>
          <div className="p-2 mt-2 flex flex-col gap-1">
            <span>FREE SHIPPING WITH AN RL ACCOUNT</span>
            <span className=" capitalize">FREE RETURN AND EXCHANGES</span>
            <span>GIFTING SERVICES AVAILABLE</span>
          </div>
        </div>
      </div>

      <div className="  ">
        <span className=" text-3xl max-sm:text-2xl prata  w-full  flex justify-center">
          Related Products
        </span>

        <RelatedProducts
          category={thisproduct.category}
          subCategory={thisproduct.subCategory}
        />
      </div>
    </>
  );
};

export default Product;
