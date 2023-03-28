import React from 'react'
import bg from '../public/bg.svg'
import Image from 'next/image'
const stats = () => {
  return (
    <div className='w-screen lg:ml-[-100px] ml-[-20px] font-bold flex justify-center mt-[50px] lg:px-[100px] text-white bg-main h-[200px]'>

        <Image src={bg} className='w-full  h-[200px]  lg:ml-[-100px] opacity-[20%] absolute' width={100} height={100}></Image>
       <div className="my-auto flex justify-evenly w-full">
          <div className="field text-center">
            <h1 className=' lg:text-5xl text-3xl'>5+</h1>
            <h2 className='lg:text-2xl  text-md '>Field of study</h2>
        </div>
        <div className="field  text-center">
            <h1 className=' lg:text-5xl text-3xl'>3k+</h1>
            <h2 className='lg:text-2xl  text-md '>Students</h2>
        </div>
        <div className="field  text-center">
            <h1 className=' lg:text-5xl text-3xl'>1.3k+</h1>
            <h2 className='lg:text-2xl  text-md '>Graduate</h2>
        </div>
        <div className="field  text-center">
            <h1 className=' lg:text-5xl text-3xl'>15+</h1>
            <h2 className='lg:text-2xl  text-md '>Mentor</h2>
        </div>
      
       </div>
      

    </div>
  )
}

export default stats