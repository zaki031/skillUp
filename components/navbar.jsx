import React from 'react'
import { Inter } from '@next/font/google'
import { BsChevronDown} from 'react-icons/bs';
import {HiMenu} from 'react-icons/hi'
import Menu from "./menu.jsx"
import { useEffect } from 'react';
import { useState } from 'react';
import menu from './menu.jsx';




const navbar = () => {

  const [menuOn, setMenuOn] = useState(false)

function displayDate() {
  setMenuOn(true)
}
  
  useEffect(()=>{
    document.getElementById("menu").addEventListener("click", displayDate);
  },)
  useEffect(()=>{
    
      menuOn ? document.querySelector('#nav').style.backgroundColor = '#007272': null
    
  },menuOn)
  


  
  return (
    <nav id='nav' className='flex justify-between navbar'>
        <h1 className='text-3xl font-bold cv '>SkillUp</h1>
        <div className="hidden sm:block">
          <div className="links     w-[800px] justify-between text-[20px] flex">
            <div className="pages  justify-evenly w-[500px] text-md flex">
                <a href="">Home</a>
            <div className="flex gap-2 text-xl">
            <a href="">Courses </a>
            <BsChevronDown className='mt-[10px] text-sm' />

            </div>
            <a href="">Contact</a>
            </div>
            
            <div className="log ">
                <a href="" className=''>Login</a>
                <a href="" className='p-2 px-5 ml-4 border-2 border-main rounded-xl'>SignUp</a>
            </div>
        </div>
        </div>
        
        <HiMenu id='menu'  className='block mt-3 text-xl sm:hidden '/>
        <Menu/>
    </nav>
  )
}

export default navbar