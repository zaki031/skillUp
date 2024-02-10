import React, { useState } from 'react'
import bg from '../public/bg.svg'
import Image from 'next/image'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
const stats = () => {

const [counterOn, setCounterOn] = useState(false)

  return (
    <div className=' transition-all duration-500  w-screen   font-bold flex justify-center mt-[50px] lg:px-[100px] text-white bg-main h-[200px]'>
        <Image src={bg} className='w-full  h-[200px]  lg:ml-[-100px] opacity-[20%] absolute' width={100} height={100}></Image>
       <div className="flex w-full my-auto justify-evenly">
          <div className="text-center field">
            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >
            <h1 className='text-3xl lg:text-5xl'>
             {counterOn && <CountUp start={1} end={5} duration={2}/>}+
            </h1>
            </ScrollTrigger>
            <h2 className='lg:text-2xl text-md '>Field of study</h2>
        </div>
        <div className="text-center field">
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >
            <h1 className='text-3xl lg:text-5xl'>
             {counterOn && <CountUp start={1} end={3000} duration={2}/>}+
            </h1>
            </ScrollTrigger>            <h2 className='lg:text-2xl text-md '>Students</h2>
        </div>
        <div className="text-center field">
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >
            <h1 className='text-3xl lg:text-5xl'>
             {counterOn && <CountUp start={1} end={1300} duration={2}/>}+
            </h1>
            </ScrollTrigger>            <h2 className='lg:text-2xl text-md '>Graduate</h2>
        </div>
        <div className="text-center field">
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >
            <h1 className='text-3xl lg:text-5xl'>
             {counterOn && <CountUp start={1} end={15} duration={2}/>}+
            </h1>
            </ScrollTrigger>            <h2 className='lg:text-2xl text-md '>Mentor</h2>
        </div>
      
       </div>
      

    </div>
  )
}

export default stats