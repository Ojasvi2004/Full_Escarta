import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/ShopContext'
import Title from './Title';
import Productitem from './Productitem';
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react';
import { Slidersetting } from '../utils/sliderNav';
import 'swiper/css';
import 'swiper/css/autoplay'; 



const Bestseller = () => {
   const {products}=useContext(Shopcontext);

   const[bestseller,setbestseller]=useState([]);

   useEffect(()=>{
    const bestproduct=products.filter((item)=>(item.bestseller));
    setbestseller(bestproduct.slice(0,5));
   },[products]);

   const swiper=useSwiper();
  return (
    <div className=''>
        <Title text1={'Best Sellers'}/>
        <Swiper {...Slidersetting} autoplay={{delay:3000,disableOnInteraction:true}} className=' '>

           
                {
            bestseller.map((item,index)=>{
                return(
                    <SwiperSlide key={item._id}>
                    <Productitem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image}  />
                    </SwiperSlide>
                      )
                        })
                }   
        </Swiper>

         <div className='flex items-center justify-center gap-10 p-2 md:p-6'>
            <button className='text-xl border-1 border-slate-900 px-5 py-2 mb-10 prev hover:cursor-pointer'><i className='bx bx-left-arrow-alt '></i></button>
            <button className='text-xl border-1 border-slate-900 px-5 py-2 mb-10 next hover:cursor-pointer'><i className='bx bx-right-arrow-alt ' ></i></button>
         </div>
      
    </div>
  )
}

export default Bestseller
