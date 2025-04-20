import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/ShopContext'
import { SwiperSlide, useSwiper,Swiper } from 'swiper/react';
import { Autoplay} from 'swiper/modules';

import Productitem, { Productitem2 } from './Productitem';
import { Slidersetting } from '../utils/sliderNav';
import { Slidersetting2 } from '../utils/sliderNav2';

const Explore = () => {
    const {products}=useContext(Shopcontext);
    const [exploreslides,setexploreslides]=useState([]);

    useEffect(()=>{
        if (products && products.length > 0) {
            setexploreslides(products.slice(0, 9));
          }
    },[products]);

    const swiper=useSwiper();
  return (
   
    <div className=' w-full flex max-sm:flex-col mt-20 mb-20'>
        <div className=' flex md:w-4/5 max-sm:w-full text-center  flex-col justify-center items-center prata '>
            <span className=' text-4xl'>More to</span>
            <span className=' text-6xl'>Explore</span>
            <span className=' text-xl mt-8'>Explore seasonal collections,<br/> iconic accessories, and more</span>

        </div>


        <div className=' overflow-hidden justify-center flex items-center'>
            <Swiper {...Slidersetting2} className=' ' > 
                {
                    exploreslides.map((item,index)=>{
                        return(
                            <SwiperSlide key={item._id}>

                                <Productitem2 key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} />

                            </SwiperSlide>
                        )
                    })
                }
            
            </Swiper>

        </div>

      
    </div>
  )
}

export default Explore
