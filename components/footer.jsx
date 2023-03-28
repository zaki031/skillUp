import React from 'react'
import bg from '../public/bg.svg'
import Image from 'next/image'
import {BsFacebook,BsInstagram,BsLinkedin} from 'react-icons/bs'
const footer = () => {
  return (
    <div className='bg-main h-[70px] flex justify-evenly lg:p-7 p-3 text-white w-screen ml-[-20px] lg:ml-[-100px]'>
        <Image src={bg} className='w-full  h-[55px] object-cover mt-[-10px]  lg:ml-[-100px] opacity-[20%] absolute' width={100} height={100}></Image>

        <h1 className='text-3xl font-bold'>SkillUp</h1>
        <p className='lg:mt-2 text-sm mx-[10px] text-center '>Copyright © SkillUp 2023 - ALL rights reserved.</p>
        <div className="flex gap-2 text-3xl links ">

            <BsFacebook/>
            <BsInstagram/>
            <BsLinkedin/>            
        </div>

    </div>
  )
}

export default footer