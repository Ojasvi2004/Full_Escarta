import React from 'react'
import '../index.css'

const Title = ({text1}) => {
  return (
    <div className=' w-full h-10 bg-red text-center mt-10 mb-10'>
       <span className='text-6xl max-sm:text-4xl prata'> {text1} </span>
      
    </div>
  )
}

export default Title
