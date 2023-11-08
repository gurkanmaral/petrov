import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='w-full mt-[20px] md:mt-[200px] '>
        <div className='relative hidden md:block w-full md:h-[500px] overflow-hidden'>
        <Image 
        fill
        src="/banner.png"
        alt=""
        />
        </div>
        <div className='relative md:hidden w-full h-[720px] overflow-hidden'>
        <Image 
        fill
        src="/banner-small.png"
        alt=""
        className='object-contain'
        />
        </div>
    </div>
  )
}

export default Banner