import React from 'react'
import bg from '../public/bg.svg'
import Image from 'next/image'
import {BsFacebook,BsInstagram,BsLinkedin} from 'react-icons/bs'
const footer = () => {
  return (
    <div className='bg-main h-[70px] lg:h-[90px] flex justify-evenly lg:p-7 p-3 text-white w-screen'>
        <Image src={bg} className='w-full  h-[65px] object-cover mt-[-10px]  lg:ml-[-100px] opacity-[20%] absolute' width={100} height={100}></Image>

        <h1 className='lg:text-3xl font-bold'>SkillUp</h1>
        <p className='lg:mt-2 text-sm mx-[10px] text-center '>Copyright © SkillUp 2023 - ALL rights reserved.</p>
        <div className="flex gap-2 lg:text-3xl links z-[5] ">

            <BsFacebook className='duration-300 ease-out shadow-xl hover:-translate-y-1' />
            <BsInstagram className='duration-300 ease-out shadow-xl hover:-translate-y-1' />
            <BsLinkedin className='duration-300 ease-out shadow-xl hover:-translate-y-1' />            
        </div>

    </div>
  )
}

export default footer