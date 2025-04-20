import React from 'react'
import '../index.css'

const Hero = () => {
  return (
    <div>
       <div className="px-5 md:px-10  py-16  w-full h-full bg-[url('/two-young-beautiful-brunette-girls-nice-trendy-summer-similar-suits-clothes.jpg')] bg-cover ">
        <div className=' flex flex-col md:gap-10 lg:gap-10 gap-3'>
          <span className=' md:text-5xl text-2xl  w-2/3 md:w-1/2 prata'>Where Style Meets Elegance.</span>
          <span className=' md:text-2xl  w-2/3 md:w-1/2 prata'>Step into a world where every outfit tells a story, and your style speaks volumes without saying a word.</span>
          <button className='border-1 border-slate-700 w-fit px-5 py-2 rounded-full text-2xl max-sm:text-base roboto hover:bg-slate-900 hover:text-white duration-300'>Shop Now</button>
          <div className=' max-sm:hidden h-40  '></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
