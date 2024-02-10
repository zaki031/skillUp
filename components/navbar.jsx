import React from 'react'
import { Inter } from '@next/font/google'
import { BsChevronDown} from 'react-icons/bs';
import {HiMenu} from 'react-icons/hi'
import Menu from "./menu.jsx"
import { useEffect } from 'react';
import { useState } from 'react';
import menu from './menu.jsx';
import Button from  "./button.jsx"




const navbar = () => {




  
  return (
    <nav id='nav' className=' transition-all duration-500  flex lg:px-[150px] pl-4 justify-between navbar'>
        <h1 className='text-3xl font-bold cv pt-[10px] '>SkillUp</h1>
        <div className="hidden sm:block pt-[20px]">
          <div className="links     w-[800px] justify-between text-[16px] flex">
            <div className="pages  justify-evenly w-[500px]  flex">
                <a href="#home"className='duration-300 ease-out hover:text-main hover:-translate-y-[2px]' >Home</a>
            <a href="#courses">Courses </a>
            <a href="#contact" className='duration-300 ease-out hover:text-main hover:-translate-y-[2px]'>Contact</a>
            </div>
            <Button/>
            <div className="log ">
                <a href="" className='duration-300 ease-out hover:text-main hover:-translate-y-[2px]'>Login</a>
                <a href="" className='p-2 px-5 ml-4 duration-100 ease-in border-2 order-dashed hover:bg-main hover:text-white border-main rounded-xl'>SignUp</a>
            </div>
        </div>
        </div>
        
     
    </nav>
  )
}

export default navbar
