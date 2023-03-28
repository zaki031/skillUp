import React from 'react'
import bg from '../public/bg.svg'
import Image from 'next/image'
const courses = () => {
  return (
    <div className='pt-[50px] py-[50px]'>
       <h1 className='text-5xl font-bold'>Explore our courses by category</h1>
<br />
        <p className='text-[#575252] text-xl max-w-[800px]'>Experience a diverse range of top-quality courses in programming, finance, design, marketing, and management,
 all offered by our online school as the best in the market.</p>

 <br />
    <div className="font-bold text-center courses"> 
        <div className="text-white lg:justify-evenly  lg:flex">
            <div  className='programing bg-main   w-[300px] h-[100px] rounded-xl'>
                <div className="m-5 txt">
                <h1 className='text-2xl '>💻 Programing</h1>
                <p>+20 programing course</p>
                </div>
               
                <Image src={bg} className='absolute opacity-40 ml-[1.5px] lg:mt-[-96px] mt-[-78px] w-[295px] h-[100px]' width={200} height={200}></Image>


            </div>
            <div  className='programing bg-main  w-[300px] h-[100px] rounded-xl'>
                <div className="m-5 txt">
                <h1 className='text-2xl '>🎨 Design</h1>
                <p>+15+ design course</p>
                </div>
                <Image src={bg} className='ml-[1.5px]  absolute opacity-40 lg:mt-[-96px] mt-[-78px] w-[295px] h-[100px]' width={200} height={200}></Image>


            </div>
            
            <div  className='programing bg-main  w-[300px] h-[100px] rounded-xl'>
                <div className="m-5 txt">
                <h1 className='text-2xl '>📈 Marketing</h1>
                <p>+10 marketing course</p>
                </div>
                <Image src={bg} className='ml-[1.5px] absolute opacity-40 lg:mt-[-96px] mt-[-78px] w-[295px] h-[100px]' width={200} height={200}></Image>


            </div>
            

        </div>
        <div className="text-white lg:flex lg:mt-5 justify-evenly">
            <div  className='programing bg-main  w-[300px] h-[100px] rounded-xl'>
                <div className="m-5 txt">
                <h1 className='text-2xl '>💰 Finance</h1>
                <p>+3 Finance course</p>
                </div>
               
                <Image src={bg} className='ml-[1.5px] absolute opacity-40 lg:mt-[-96px] mt-[-78px] w-[295px] h-[100px]' width={200} height={200}></Image>


            </div>
            <div  className='programing bg-main  w-[300px] h-[100px] rounded-xl'>
                <div className="m-5 txt">
                <h1 className='text-2xl '>📝 Copywriting</h1>
                <p>+5 copywriting course</p>
                </div>
                <Image src={bg} className='ml-[1.5px] absolute opacity-40 lg:mt-[-96px] mt-[-78px] w-[295px] h-[100px]' width={200} height={200}></Image>


            </div>
            
            <div  className='programing bg-main  w-[300px] h-[100px] rounded-xl'>
                <div className="m-5 txt">
                <h1 className='text-2xl '>💼 Management</h1>
                <p>+10 management course</p>
                </div>
                <Image src={bg} className='ml-[1.5px] absolute opacity-40 lg:mt-[-96px] mt-[-78px] w-[295px] h-[100px]' width={200} height={200}></Image>


            </div>
            

        </div>

    </div>
    </div>
  )
}

export default courses