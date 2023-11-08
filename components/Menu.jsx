import Image from 'next/image'
import React from 'react'

const Menu = () => {
  return (
    <section className='relative  w-full flex  items-center justify-center md:mt-[20px]   '>
        <div className='gap-[20px] md:gap-[140px] flex flex-col  w-[283px] md:w-[948px]  h-[346px] md:h-[706px]  mt-[20px] items-center '>
            <div className='text-center w-[208px]   md:w-[294px] h-[32px] md:h-[76px]  '>
                <p className='text-[22px] md:text-[57px] font-fairplay '>
                    P - Menus
                </p>
            </div>
            <div className='flex w-full h-[290px] gap-[10px] md:gap-[45px]  '>
                  <div className='flex flex-col gap-[10px] md:gap-[20px] md:w-[450px] md:h-[491px]'>
                    <div className='relative w-[134px] md:w-[450px] h-[197px] md:h-[300px] '>
                        <Image
                        src="/FSM.png"
                        alt=""
                        fill
                        />
                    </div>
                   <div className='flex flex-col w-[134px] md:w-[450px]  h-[87px] md:h-[169px]   '>                                   
                     <span className='text-[6px] md:text-[14px] text-[#707070] font-roboto'>Opening Hours: 10:00 & Closing Hours:22:00</span>
                     <p className='font-poppins font-medium text-[16px] md:text-[28px] md:mt-[-7px]'>F.S.M. Bulvarı MENU</p>                    
                     <p className='hidden md:block font-poppins font-medium text-[16px] md:font-normal md:text-[#707070]'>MENU</p>
                     <div className='flex mt-auto'>
                     <p className='font-poppins  text-[8px] md:text-[16px] ' >Daha Fazla / Read More</p>
                     </div>       
                   </div>
                  </div>
                  <div className='flex flex-col gap-[10px] md:gap-[20px] md:w-[450px] md:h-[491px]'>
                    <div className='relative w-[134px] md:w-[450px] h-[197px] md:h-[300px] '>
                        <Image
                        src="/PodyumPark.png"
                        alt=""
                        fill
                        />
                    </div>
                   <div className='flex flex-col w-[134px] md:w-[450px]  h-[87px] md:h-[169px]  '>                                   
                     <span className='text-[6px] md:text-[14px] text-[#707070] font-roboto'>Opening Hours: 10:00 & Closing Hours:22:00</span>
                     <p className='font-poppins font-medium text-[16px] md:text-[28px] md:mt-[-7px]'>PodyumPark MENU</p>                    
                     <p className='hidden md:block font-poppins font-medium text-[16px] md:font-normal md:text-[#707070]'>MENU</p>
                     <div className='flex mt-auto'>
                     <p className='font-poppins  text-[8px] md:text-[16px] ' >Daha Fazla / Read More</p>
                     </div>       
                   </div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Menu