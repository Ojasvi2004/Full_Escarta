import React, { useContext } from 'react'
import { Shopcontext } from '../context/ShopContext'

const Orders = () => {
  const { currency,cartData,products}=useContext(Shopcontext);

  return (
    <div className=' '>
      <div className='  w-full font-semibold justify-center flex  text-3xl prata mt-10 max-sm:text-2xl'>Your Orders</div>
      <div className=' flex flex-col    justify-center  items-center mt-10 max-sm:mt-0 mb-20'>
     {
      cartData.map((item,index)=>{
        
        const ProductData= products.find((product)=> product._id==item._id )

        return(
          <div className='w-2/3 max-sm:w-full h-32   gap-2 flex border-black justify-around  items-center mt-8 ' key={index}>

            <img src={ProductData.image?.[0] || "Placeholder.jpg"} alt="" className=' h-full' />
            <div className=' md:text-2xl max-sm:text-sm m-5 max-sm:m-2 '>
              <p className=' prata'>{ProductData.name}</p>

              <div className=''>
              {currency}{ProductData.price}
              <p className=' text-white text-xl md:font-semibold md:text-xl bg-gray-400 w-fit pl-2 pr-2 mt-2 '>{item.size}</p><p className=' text-slate-900'>{item.quantity}</p>
            </div>
            </div>
            <div>
            <div className=' text-xl roboto tracking-wider flex justify-center max-sm:text-sm items-center gap-1'>
             <div className=' w-2 h-2  rounded-full bg-green-400'></div> <p>Order Placed</p>
            </div>
            <div>
              <span className=' max-sm:text-sm'>Date:15/15/2020</span>
            </div>
            </div>

          
           

          </div>
          
          
        )
      })
     }
     </div>

      
    </div>
  )
}

export default Orders
