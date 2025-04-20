import React, { useContext } from 'react'
import { Shopcontext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import '../index.css'




export const Productitem2 = ({id,image,name,price}) => {

    const {currency}=useContext(Shopcontext)
  return (
    <Link to={`/product/${id}`}>
      

<div className="w-full    hover:scale-102  duration-300 origin-center  ">
    <span href="#" className=''>
        <img className=" p-5  " src={image?.[0] || "/placeholder.jpg"} alt="product image" />
    </span>
 
</div>

    </Link>
  )
}


const Productitem = ({id,image,name,price}) => {

    const {currency}=useContext(Shopcontext)
  return (
    <Link to={`/product/${id}`}>
      

<div className="w-full  max-w-sm  hover:scale-102  duration-300 origin-center  ">
    <span href="#" className=''>
        <img className=" p-5 " src={image?.[0] || "/placeholder.jpg"} alt="product image" />
    </span>
    <div className="px-8 pb-5">
        <span href="#">
            <h5 className=" text-center h-10  tracking-tight prata ">{name}</h5>
        </span>
       
        <div className="flex items-center justify-between mt-2  max-sm:hidden">
            <span className="text-2xl roboto  ">{currency}{price}</span>
            <span href="#" className=" roboto  font-medium  border-1 border-slate-900 text-sm px-5 py-2  text-center hover:bg-slate-800 hover:text-white duration-300 ">Add to cart</span>
        </div>
    </div>
</div>

    </Link>
  )
}

export const Productitem3 = ({id,image,name,price}) => {

    const {currency}=useContext(Shopcontext)
  return (
    <Link to={`/product/${id}`}>
      

<div className="w-full  max-w-sm  hover:scale-102  duration-300 origin-center  ">
    <span href="#" className=''>
        <img className=" p-5 max-sm:p-1 " src={image?.[0] || "/placeholder.jpg"} alt="product image" />
    </span>
    <div className="px-8 pb-5 max-sm:px-2">
        <span href="#">
            <h5 className=" text-center h-10  tracking-tight prata ">{name}</h5>
        </span>
       
        <div className="flex items-center justify-between mt-6 ">
            <span className="text-2xl roboto max-sm:text-base  ">{currency}{price}</span>
            <button href="#" className=" roboto  font-medium  border-1 border-slate-900 text-sm px-5 py-2 max-sm:py-1 max-sm:px-1  text-center hover:bg-slate-800 hover:text-white duration-300 ">Add to cart</button>
        </div>
    </div>
</div>

    </Link>
  )
}

export default Productitem
