import Image from 'next/image';
import React from 'react'

const Menu = [
    {
        img:"/Image - 1.png",
        title:"Günaydın Petrov",
        header:"Good Morning Petrov"

    },
    {
        img:"/Image - 2.png",
        title:"Ekmek Üstü", 
        header:"Bread Top"

    },
    {
        img:"/Image - 3.png",
        title:"Bowls",
        header:"Bowls"

    },
    

];
const Menu1 = [
    {
        img:"/Image - 1.png",
        title:"Günaydın Petrov",
        header:"Good Morning Petrov"

    },
    {
        img:"/Image - 2.png",
        title:"Ekmek Üstü", 
        header:"Bread Top"

    },
    {
        img:"/Image - 3.png",
        title:"Bowls",
        header:"Bowls"

    },
    {
        img:"/Image - 4.png",
        title:"Petrov Basic",
        header:"Basic"

    },
    

];
const Menu2 = [
    {
        img:"/Image - 3.png",
        title:"Smoothie Bowl",
        desc:"Muz çilek granola, orman meyveleri ve kabak çekirdeği ile.",
        price: "280,00 ₺"
    },
    {
        img:"/Image - 3.png",
        title:"Pineapple Bowl",
        desc:"Muz çilek granola, orman meyveleri ve kabak çekirdeği ile.",
        price: "280,00 ₺"
    },
    {
        img:"/Image - 3.png",
        title:"Yeşil Bowl",
        desc:"Muz çilek granola, orman meyveleri ve kabak çekirdeği ile.",
        price: "280,00 ₺"
    },
    {
        img:"/Image - 3.png",
        title:"Breakfast Bowl",
        desc:"Muz çilek granola, orman meyveleri ve kabak çekirdeği ile.",
        price: "280,00 ₺"
    },

]
const MenuDetails = () => {



  return (
    <section className='flex flex-col  items-center mt-[100px]'>
        <div className='flex w-full md:w-[1650px] h-[263px] md:h-[725px] border  '>
            <div className='flex items-center flex-col  mx-auto w-[348px]  gap-[45px]'>
                  <div className='w-[294px] h-[76px] flex items-center justify-center '>
                    <p className='flex  text-center font-fairplay text-[57px]'>P | İçerik</p>
                  </div>
                   <div className='flex gap-[14px] md:hidden '>
                       {Menu.map((item)=>(
                        <div key={item.title} className='flex flex-col gap-[12px]'>
                                <div className='relative w-[106px] md:w-[377px] h-[107px] md:h-[380px] '>
                                    <Image 
                                    src={item.img}
                                    alt=""
                                    fill
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-poppins text-[8px]'>{item.header}</p>
                                    <div className='w-[99px] h-[71px] '>
                                        <p className='font-poppins text-[18px] font-semibold'>{item.title}</p>
                                    </div>
                                </div>
                        </div>
                       ))}
                   </div>
                   <div className='hidden md:flex gap-[14px] flex-col items-center  '>
                  <div className='flex gap-[33px]'>
                    {Menu1.map((item)=>(
                            <div key={item.title} className='flex flex-col gap-[40px] '>
                                    <div className='relative w-[106px] md:w-[377px] h-[107px] md:h-[380px] '>
                                        <Image 
                                        src={item.img}
                                        alt=""
                                        fill
                                        />
                                    </div>
                                    <div className='flex flex-col w-[377px] h-[76px]   '>                            
                                        <div className=' '>
                                            <p className='font-poppins text-[28px] font-semibold'>{item.title}</p>
                                        </div>
                                        <p className='font-poppins font-medium text-[18px]'>{item.header}</p>
                                    </div>
                            </div>
                        ))}
                  </div>
                <div className=' w-[110px] h-[48px] flex gap-[10px] mt-[45px]'>
                    <Image 
                    src="/Left arrow.png"
                    alt=''
                    height={48}
                    width={48}
                    
                    />
                    <Image 
                    src="/Right arrow.png"
                    alt=''
                    height={48}
                    width={48}
                    />
                </div>
                   </div>
            </div>
        </div>
        <div className='w-[90%] h-[456px]  md:w-[704px] md:h-[787px] flex flex-col   mt-[80px] '>
           {Menu2.map((item,index)=>(
            <div key={item.title} className={`h-[114px] md:h-[196px]  flex ${index === 0 ? 'items-start md:items-center' : index === Menu2.length - 1 ? 'items-end' : 'items-center'} ${
                index !== Menu2.length - 1 ? 'border-b border-[#8E8E8E]' : ''
              } gap-[20px]`}>       
              <div className='flex gap-[20px] md:gap-[50px]'>
              <div className='relative w-[84px] md:w-[114px] h-[84px] md:h-[114px]'>
                    <Image 
                    fill
                    src={item.img}
                    alt=""
                    />
               </div>
               <div className='flex flex-col '>    
                    <p className='font-poppins font-semibold text-[18px] md:text-[28px]'>{item.title}</p>
                    <div className='w-[181px] md:w-[516px] h-auto'>
                        <p className='text-[8px] md:text-[16px] font-semibold font-poppins'>{item.desc}</p>
                        <p className='text-[8px] md:text-[16px] text-[#868686]'>{item.price}</p>
                    </div>
               </div>        
                </div>   
            </div>           
           ))}
        </div>
    </section>
  )
}

export default MenuDetails