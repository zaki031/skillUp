import React from 'react'
import bg from '../public/bg.svg'
import Image from 'next/image'
const courses = () => {
  return (
    <div id="courses" className='pt-[50px] lg:mx-[200px] px-[25px]  py-[50px]'>
       <h1 className='lg:text-5xl text-4xl font-bold'>Explore our courses by category</h1>
<br />
        <p className='text-[#575252] lg:max-w-[500px] ml-[20px] text-xl max-w-[800px]'>Experience a diverse range of top-quality courses in programming, finance, design, marketing, and management,
 all offered by our online school as the best in the market.</p>

 <br />
    <div className="items-start font-bold text-center courses"> 
        <div className="m-auto text-white lg:justify-evenly lg:flex">
            <div  className='programing m-auto duration-300 ease-out hover:-translate-y-1 shadow-xl bg-main   w-[300px] h-[100px] rounded-xl'>
                <div className="p-5 m-5 text-left  lg:p-0 txt">
                <h1 className='text-2xl font-bold'>💻 Programing</h1>
                <p>+20 programing course</p>
                </div>
               
                <Image src={bg} className='absolute opacity-70 ml-[1.5px] lg:mt-[-96px] mt-[-115px] w-[295px] h-[100px]' width={200} height={200}></Image>


            </div>
            <div  className='design m-auto bg-main duration-300 ease-out hover:-translate-y-1 shadow-xl  w-[300px] h-[100px] rounded-xl'>
                <div className="p-5 m-5 text-left  lg:p-0 txt">
                <h1 className='text-2xl font-bold'>🎨 Design</h1>
                <p>+15+ design course</p>
                </div>
                <Image src={bg} className='ml-[1.5px]  absolute  opacity-70 lg:mt-[-96px] mt-[-115px] w-[295px] h-[100px]' width={200} height={200}></Image>


            </div>
            
            <div  className='marketing m-auto bg-main duration-300 ease-out hover:-translate-y-1 shadow-xl  w-[300px] h-[100px] rounded-xl'>
                <div className="p-5 m-5 text-left  lg:p-0 txt">
                <h1 className='text-2xl font-bold '>📈 Marketing</h1>
                <p>+10 marketing course</p>
                </div>
                <Image src={bg} className='ml-[1.5px] absolute opacity-70 lg:mt-[-96px] mt-[-115px] w-[295px] h-[100px]' width={200} height={200}></Image>


            </div>
            

        </div>
        <div className="text-white lg:flex lg:mt-5 justify-evenly">
            <div  className='finance m-auto bg-main duration-300 ease-out hover:-translate-y-1 shadow-xl  w-[300px] h-[100px] rounded-xl'>
                <div className="p-5 m-5 lg:p-0 text-left  txt">
                <h1 className='text-2xl  font-bold'>💰 Finance</h1>
                <p>+3 Finance course</p>
                </div>
               
                <Image src={bg} className='ml-[1.5px] absolute opacity-70 lg:mt-[-96px] mt-[-115px] w-[295px] h-[100px]' width={200} height={200}></Image>


            </div>
            <div  className='copywriting m-auto bg-main duration-300 ease-out hover:-translate-y-1 shadow-xl  w-[300px] h-[100px] rounded-xl'>
                <div className="p-5 m-5 lg:p-0 text-left  txt">
                <h1 className='text-2xl font-bold '>📝 Copywriting</h1>
                <p>+5 copywriting course</p>
                </div>
                <Image src={bg} className='ml-[1.5px] absolute opacity-70 lg:mt-[-96px] mt-[-115px] w-[295px] h-[100px]' width={200} height={200}></Image>


            </div>
            
            <div  className='management m-auto bg-main duration-300 ease-out hover:-translate-y-1 shadow-xl  w-[300px] h-[100px] rounded-xl'>

                <div className="p-5 m-5 text-left lg:p-0 txt">
                <h1 className='text-2xl font-bold '>💼 Management</h1>
                <p>+10 management course</p>
                </div>
                <Image src={bg} className='ml-[1.5px] absolute opacity-70 lg:mt-[-96px] mt-[-115px] w-[295px] h-[100px]' width={200} height={200}></Image>



            </div>
            

            

        </div>

    </div>
    </div>
  )
}

export default courses