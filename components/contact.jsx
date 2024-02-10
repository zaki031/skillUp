import React from 'react'
import Image from 'next/image'
import bg from '../public/bg.svg'
import pic from '../public/contact.jpg'
const contact = () => {
  return (    
    <div id="contact" className='dark:bg-[#221D1D] flex justify-between pt-[50px] lg:px-[150px] px-[25px]  py-[50px]'>

      

         
        <form className='ml-5 mt-2' >
               <h1 className='lg:text-5xl -ml-[25px] text-4xl font-bold'>Get in touch</h1>
          <br/>
          <label className='' for='name'>Name<span className='text-main'>*</span> </label> <br/>
          <input className='h-[40px] border-[1px] border-mai border-2 border-main w-[350px] rounded-md pl-2' placeholder='Enter your name' type="text" name='name'/> <br/>



          <label for='email' className='mt-[15px]' >Email<span className='text-main'>*</span></label> <br/> 
          <input className='h-[40px] border-main border-[1px]  w-[350px] rounded-md pl-2' placeholder='Enter your email' type="email" name='email'/> <br/>

        <label for='message' className='mt-[15px]'>Message<span className='text-main'>*</span></label> <br/>
        <textarea className='h-[80px] border-[1px] border-main  w-[350px] rounded-md pl-2' placeholder='Enter your message' type="message" name='message'/>

          <div className="flex mt-[15px]">
    <a href="" id='get' className=' px-[10px] text-center w-[100px] align-center  py-[5px] text-white duration-300 ease-out rounded-lg shadow-md hover:-translate-y-1   text-bold bg-main'>   





            <Image src={bg} className='absolute opacity-80 h-[34px] w-[70px] ml-[-9px]   lg:w-[100px] mt-[-4.5px] ' width={200} height={200}></Image>

  Send</a>


</div>
        

 





      </form>

    <Image src={pic} className=' rounded-md rounded-br-[150px] hidden lg:block  object-cover' width={500} height={400}></Image>


    </div>
    

  )
}

export default contact
