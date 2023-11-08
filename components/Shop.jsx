import Image from 'next/image'
import React from 'react'

const Shop = () => {

    const Menu3 = [
        {
            img:"/Img 05.png",
            title:"Kenya AB Karimikui #026",
            price:"280,00 ₺"
        },
        {
            img:"/Img 05.png",
            title:"Kenya AB Karimikui #026",
            price:"280,00 ₺"
        },
        {
            img:"/Img 05.png",
            title:"Kenya AB Karimikui #026",
            price:"280,00 ₺"
        },
        {
            img:"/Img 05.png",
            title:"Kenya AB Karimikui #026",
            price:"280,00 ₺"
        },
        {
            img:"/Img 05.png",
            title:"Kenya AB Karimikui #026",
            price:"280,00 ₺"
        },
        {
            img:"/Img 05.png",
            title:"Kenya AB Karimikui #026",
            price:"280,00 ₺"
        },
    ]

    const Menu4 = [
        {
            title:"Kahve",
            
        },
        {
            title:"Kahve Ekipmanları ",
            
        },
        {
            title:"Petrov Special",
            
        },
        {
            title:"All",
            
        },
    ]

  return (
    <section className='w-full  h-auto  '>
        <div className='w-[80%]  md:w-[850px] xl:w-[1248px]  md:items-center  flex flex-col  mx-auto md:mt-[100px]'>
              <div className='w-[273px] md:w-[294px] h-[72px] md:h-[76px]  flex justify-center mt-[20px]  py-2 '>
                <h2 className='font-flairplay text-[22px] md:text-[57px]'>P | SHOP</h2>
              </div>
            <div className=' px-6 md:px-0 gap-[12px] md:gap-[185px] flex flex-col md:flex-row font-poppins text-[16px] md:w-full md:border-b-2 md:mt-[86px] md:h-[100px] md:items-center'>
                {Menu4.map((item,index)=>(
                    <div key={item.title}  
                    className={`text-[#707070] w-auto h-[16px] md:h-[26px] ${
                        index === 0  ? 'hidden md:flex' : ''
                      }`} >
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
            <div className='mt-[15px] md:w-full  px-6 md:px-0 md:gap-[39px] flex flex-col md:mt-[92px]'>
                <div className=' font-poppins text-[22px] xl:text-[33px] md:font-medium w-[239px] h-[27px]  font-medium'>
                    <p>Kahve</p>
                </div>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[25px] md:gap-[50px] '>
                    {Menu3.map((item,index)=>(
                        <div key={item.title} 
                        className={`flex flex-col   mt-[22px] gap-[16px] md:gap-[20px] ${
                            (index < 4 && index >= 0) || index >= 6 ? '' : 'hidden md:flex'
                          }`}>
                            <div className='relative w-[239px] md:w-[380px] h-[240px] md:h-[380px]'>
                                <Image 
                                fill
                                src={item.img}
                                alt=""
                                />
                            </div>
                            <div className=' flex flex-col md:gap-[20px] '>
                                <div className='w-[239px] h-[23px] '>
                                    <p className='font-poppins font-medium text-[16px]'>{item.title}</p>
                                </div>
                                <div className='w-[87px] h-[23px]'>
                                    <p className='font-poppins font-medium text-[16px] text-[#868686]'> {item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
   
    </section>
  )
}

export default Shop