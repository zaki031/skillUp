import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'
const menu = () => {
  return (
    <div className='fixed w-screen h-screen my-auto px-5  bg-main  mt-[60px] z-[5] ml-[-20px] block lg:hidden bg-white'>
        <a href="" className='text-5xl font-bold '>Home</a><br /> 
    <hr  className='w-screen bg-main ml-[-20px]'/>
        <br />
        <div className="flex justify-between courses ">
       <a href="" className='text-5xl font-bold '>Courses</a><br />
        <AiOutlineRight className='text-3xl mt-[10px]' />
        </div>
       <a href="" className='text-5xl font-bold '>Contact us</a><br />


        

    </div>
  )
}

export default menu