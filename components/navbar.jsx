import React from 'react'
import { Inter } from '@next/font/google'
import { BsChevronDown} from 'react-icons/bs';
import {HiMenu} from 'react-icons/hi'


const navbar = () => {
  return (
    <div className='navbar flex justify-between'>
        <h1 className='cv font-bold text-3xl '>SkillUp</h1>
        <div className="sm:block hidden">
          <div className="links     w-[800px] justify-between text-[20px] flex">
            <div className="pages font-semibold justify-evenly w-[500px] text-md flex">
                <a href="">Home</a>
            <div className="flex  text-xl gap-1">
            <a href="">Courses </a>
            <BsChevronDown className='mt-3 text-sm' />

            </div>
            <a href="">Contact</a>
            </div>
            
            <div className="log ">
                <a href="" className='font-semibold'>Login</a>
                <a href="" className='border-2 ml-4 border-main p-2 rounded-xl'>SignUp</a>
            </div>
        </div>
        </div>
        
        <HiMenu className='mt-3 text-xl block sm:hidden '/>

    </div>
  )
}

export default navbar