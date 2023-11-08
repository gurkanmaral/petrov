import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-[361px] md:h-[206px] mt-[99px] bg-[#F4F4F4] flex flex-col items-center md:items-start justify-center'>
        <div className='relative w-[80px] md:w-[171px] h-[22px] md:h-[47px]'>
        <Image
        src="/Petrov - Logo.png"
        alt=""
       fill
        className=' ' 
        />
        </div>
        <div className='flex flex-col-reverse  md:flex-row justify-between w-full border items-center mt-[50px] gap-[56px] '>         
            <p className='text-[12px] font-inter text-[#6D6D6D]'>
             © 2023 Kıratlı Creative Group. All rights reserved
            </p>
            <div className='flex mx-autogap-[16px] '>
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
  )
}

export default Footer