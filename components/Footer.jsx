import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-20 w-full'>
          <div className=' bg-[#F4F4F4] grid grid-cols-1 md:grid-cols-2 p-5 py-10'>
            <div className=' col-span-1 md:col-span-2   flex items-center md:items-start justify-center md:justify-start '>
            <img
            src="/Petrov - Logo.png"
            alt=""    
            className=' ' 
            />
        </div>
        <div className='col-span-2  flex-col-reverse md:flex-row flex '>
          <div className=' md:w-1/2 col-span-1 flex items-center md:items-start  justify-center md:justify-start py-10'>         
              <p className='text-[12px] md:text-[16px] font-inter text-[#6D6D6D]'>
              © 2023 Kıratlı Creative Group. All rights reserved
              </p>           
          </div>
        <div className='md:w-1/2 col-span-1 py-10 flex items-center md:items-end  justify-center md:justify-end  gap-4 '>
            <Image
                src="/Instagram.png"
                alt=""
                width={24}
                height={24}
                className='object-cover' 
           />
            <Image
                src="/Dribbble.png"
                alt=""
                width={24}
                height={24}
                className='object-cover' 
           />
            <Image
                src="/Twitter.png"
                alt=""
                width={24}
                height={24}
                className='object-cover' 
           />
            <Image
                src="/Youtube1.png"
                alt=""
                width={24}
                height={24}
                className='object-cover' 
           />
            </div>
        </div>
        </div>
    </footer>
    
  )
}

export default Footer