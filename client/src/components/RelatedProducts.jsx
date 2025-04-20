import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/ShopContext'
import Productitem from './Productitem';
import { Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';


const RelatedProducts = ({category,subCategory}) => {
    const swiper=useSwiper();
    const{ products }=useContext(Shopcontext);
    const [related,setrelated]= useState([]);

    useEffect(()=>{

        const productscopy=products.filter(item=> item.subCategory==subCategory && item.category==category )
      

        if (productscopy.length>6) 
        {
            setrelated(productscopy.slice(0,6));
        }
        else{
            setrelated(productscopy)
        }

       

    },[products,category,subCategory])

  return (
    <div className='max-sm:block flex flex-wrap justify-center  items-start'>
                        
                            {
                                related.length>0 ?
                                (
                                    related.map((item,index)=>{
                                        return(
                                           <div key={item._id}>
                                            <div className=' max-sm:hidden ' key={item._id}>
                                            <Productitem id={item._id} image={item.image} name={item.name} price={item.price} />
                                            </div>
                                           </div>
                                        )
                                    })
                                ):
                                (
                                    <p >No related products found.</p>
                                )
                            }      
                            <div>
                            <div className='  md:hidden max-sm:block hidden lg:hidden mt-5 mb-10'>

                        <Swiper slidesPerView={2} loop='true' spaceBetween={10}  navigation={{nextEl:'.thisnext' ,prevEl:'.thisprev'}} modules={[Navigation]} >
                            {
                                related.length>0 ? (
                                related.map((item,index)=>{
                                 return(
                                        <SwiperSlide key={item._id} className='mb-2' >
                                                <Productitem id={item._id}  image={item.image} name={item.name} price={item.price} />
                                        </SwiperSlide>
                                    )
                                }))
                                :(
                                    <p  >No related products found.</p>
                                )
                              }
                        </Swiper>
                        <div className='flex items-center justify-center gap-10 p-2 md:p-6 mt-5'>
                                <button className='text-xl border-1 border-slate-900 px-3 py-2 mb-10 thisprev hover:cursor-pointer'><i className='bx bx-left-arrow-alt '></i></button>
                                <button className='text-xl border-1 border-slate-900 px-3 py-2 mb-10 thisnext hover:cursor-pointer'><i className='bx bx-right-arrow-alt ' ></i></button>
                        </div>

                            </div>

                            </div>              
    </div>
  )
}

export default RelatedProducts
