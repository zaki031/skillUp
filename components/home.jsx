import React from 'react'
import Image from 'next/image'
import pic from '../public/home.jpg'
import bg from '../public/bg.svg'

const home = () => {
  return (
    <div className='flex pt-[50px] gap-32'>

        <Image className='sm:block hidden w-[462px] max-h-[576px] object-cover rounded-px] rounded-tr-[171px]' width={500} height={500} src={pic}></Image>
  <div className="my-auto txt">
    <h1 className='font-bold text-7xl'>Learn new skills <br /> <span className='text-main'>Easily!</span></h1>
  <br />
  <p className='text-2xl font-semibold max-w-[530px] text-[#575252]'>We give you access to the best courses to learn
new skills and boost your resume.</p>
<div className="flex gap-12 mt-10 btns">
    <a href="" id='get' className='p-3 px-2 text-xl text-white rounded-lg lg:px-5 lg:text-2xl text-bold bg-main'>                <Image src={bg} className='absolute opacity-40 h-[58.5px] w-[113px] ml-[-8px]  lg:w-[156px] mt-[-11.5px] lg:ml-[-20px]' width={200} height={200}></Image>
 Get started</a>
    <a href="" className='p-3 text-2xl border-2 rounded-lg text-bold border-main'>Learn more</a>

</div>
  </div>
  
    </div>
  )
}

export default home