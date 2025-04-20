import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/ShopContext'
import Title from './Title';
import Productitem from './Productitem';

const Latest = () => {

    const {products}=useContext(Shopcontext);
    const [latestProducts,setlatestproducts] =useState([])

    useEffect(()=>{
        setlatestproducts(products.slice(0,10));
    },[products])
  return (
    <div>
        <Title text1={'Latest Collection'}  />
        <div className='   grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ' >

            {
                latestProducts.map((item,index)=>{
                   return(
                    <Productitem key={item._id} id={item._id} name={item.name} image={item.image} price={item.price}  />
                   )
                })
            }


        </div>

      
    </div>
  )
}

export default Latest
