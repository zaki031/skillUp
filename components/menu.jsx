import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'
const menu = () => {
  return (
    <div className='absolute w-screen  transform  block  opacity-0  h-[170px] text-white my-auto px-5    mt-[60px] z-[5] ml-[-20px]  lg:hidden bg-main'>
      <br />
        <a href="" className='text-4xl font-bold '>Home</a><br /> 
        <div className="flex justify-between courses ">
       <a href="" className='text-4xl font-bold '>Courses</a><br />
        <AiOutlineRight className='text-3xl ' />
        </div>
       <a href="" className='text-4xl font-bold '>Contact us</a><br />


        

    </div>
  )
}

export default menu