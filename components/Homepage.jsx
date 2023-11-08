"use client";
import Image from 'next/image'
import React, { useState } from 'react'


const Homepage = () => {

  const [open,setOpen] = useState(true)

console.log(open)

  return (
    <section className=' relative flex flex-col  h-[352px]  md:h-[896px]  md:mt-[53px]  '>
      <div className='absolute  left-[20px] top-[18px] md:top-0  md:left-[160px] '>
            <div className='relative w-[80px] md:w-[171px] h-[22px] md:h-[47px] '>
              <Image 
              src="/Petrov - Logo.png"
              alt=""
              fill
              className='object-cover'
              />
            </div>
          </div>
     <div className='flex  justify-end lg:justify-center  h-[61px] md:h-[100px] w-full p-5 md:p-0 '>     
          <div className='hidden lg:flex gap-[40px] font-poppins text-[16px] py-4 '>
            <p>Hakkımızda</p>
            <p>Menu</p>
            <p>Shop</p>
            <p>İletişim</p>         
          </div>
            <Image 
            src="/Group 224.svg"
            alt=''
            width={26}
            height={16}
            className='lg:hidden '
            />
          
      </div> 
      <div className='relative flex '>
        <div className='flex relative w-full h-[291px] md:h-[796px]'>
          <Image 
          src="/eating.png"
          alt=""
          fill
          className='md:hidden'
          />    
         <div className='relative w-full h-[796px] '>
          <Image 
            src="/Image.png"
            alt=""
            fill
            className='hidden md:block'
            />    
         </div>
        </div>   
        {open && (
          <div className=' w-[250px] md:w-[375px] h-[245px] md:h-[364px] absolute bottom-[-250px] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[3]'>    
          <div className='relative'>
           <div className='relative  w-[250px]  md:w-[375px] h-[173px] md:h-[260px] '>
                  <Image 
                  src="/coffe.png"
                  alt=""
                 fill
                  className='relative'
                  />
           </div>
                <div className='flex bg-white rounded-b-[20px] h-[72px] w-full font-poppins text-[12px] md:text-[16px] font-medium items-center justify-center'>
                  <p>
                    MERHABA! SENİ GÖRMEK ÇOK GÜZEL
                  </p>
                </div>
               <div className='absolute  top-[-10px] md:top-[-15px]  right-[-15px] md:right-[-20px]'>
               <div className='relative w-[24px] md:w-[37px] h-[24px] md:h-[37px]'>
                <Image 
                    src="/X Button.png"
                    alt=""
                    fill
                    className='cursor-pointer'
                    onClick={()=> setOpen(false)}
                    />
               </div>
               </div>
          </div>
          </div>
        )}
        </div>            
    </section>
  )
}

export default Homepage