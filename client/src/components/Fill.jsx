import React from 'react'

const Fill = () => {
  return (
    <div>

        <div className=" flex flex-col justify-center items-center   w-full h-full bg-[url('/W_BC_FLIGHTMODE_Sept24_01_2048x1152_DI3.webp')] bg-cover">

        <div className=' h-full w-full flex flex-col gap-10 justify-center items-center text-white mt-32 mb-16 '>
            <span className='text-6xl md:text-9xl prata '>ESCARTA</span>
            <span className=' text-3xl md:text-5xl'>Modern Driver</span>
            <span className=' text-xl text-center md:text-3xl'>Explore a Selection of the Maison's Creations</span>
        </div>
        <button className=' border-2 border-white text-3xl mb-26 prata px-5 py-3 text-white hover:scale-102  duration-300 origin-center'>EXPLORE</button>

        </div>
      
    </div>
  )
}

export default Fill
