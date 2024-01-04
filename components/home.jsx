import React from 'react'
import Image from 'next/image'      
import pic from '../public/home.jpg'
import bg from '../public/bg.svg'

const home = () => {
  return (
    <div  id="home" className='flex justify-between pt-[50px] lg:px-[150px] pl-4 gap-32'>

        <Image className='sm:block hidden lg:w-[462px] max-h-[576px] object-cover rounded-[5px] rounded-tr-[171px]' width={500} height={500} src={pic}></Image>
  <div className="my-auto txt"> 
    <h1 className='font-bold lg:text-7xl text-4xl  lg:-ml-[20px]'>Learn new skills <br /> <span className='text-main'>Easily!</span></h1>
  <br />
  <p className='text-2xl font-semibold max-w-[530px] text-[#575252]'>We give you access to the best courses to learn
new skills and boost your resume.</p>
<div className="flex gap-12 mt-10 btns">
    <a href="" id='get' className='p-4 px-2 text-xl text-white duration-300 ease-out rounded-lg shadow-md hover:-translate-y-1 lg:px-5 lg:text-2xl text-bold bg-main'>   
            <Image src={bg} className='absolute opacity-40 h-[58.5px] w-[113px] ml-[-8px]  lg:w-[156px] mt-[-14.5px] lg:ml-[-20px]' width={200} height={200}></Image>
 Get started</a>
    <a href="#whyus" className='p-3 text-2xl duration-300 ease-out border-2 border-dashed rounded-lg shadow-md text-bold border-main hover:-translate-y-1'>Learn more</a>

</div>
  </div>
  
    </div>
  )
}

export default home
